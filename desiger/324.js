import { applyDisplacement } from "./101";
// Constants representing different layer types
const LayerTypes = {
  PrintfileLayer: "PrintfileLayer",
  MultiFileLayer: "MultiFileLayer",
  DisplacementLayer: "DisplacementLayer",
  StoredLayer: "StoredLayer",
};

// Conversion ratio
const inchesToMmRatio = 3.6 / 25.4;

// Blending modes mapping
const blendingModes = {
  default: "source-over",
  overlay: "overlay",
  multiply: "multiply",
  screen: "screen",
  darken: "darken",
  lighten: "lighten",
  colorburn: "color-burn",
  dodge: "color-dodge",
  softlight: "soft-light",
  linearburn: "multiply",
  dstin: "destination-in",
  dstover: "destination-over",
  sourcein: "source-in",
};

// Private fields for the class
const canvasWidthMap = new WeakMap();
const canvasHeightMap = new WeakMap();
const layerDataMap = new WeakMap();
const imageDataMap = new WeakMap();
const backgroundColorMap = new WeakMap();
const urlMap = new WeakMap();
const blendingModeMap = new WeakMap();

// Set collections to manage instances
const instances = new WeakSet();
// Abstract base class for mockup canvas operations
class MockupCanvasBase {
  //   #options;
  //   #layers;
  //   #layerBaseColor;
  imageCache = new WeakMap();
  storedLayers = {};

  constructor(options) {
    if (new.target === MockupCanvasBase) {
      throw new Error("Abstract classes can't be instantiated.");
    }

    this.CACHE_TIMEOUT = 10000; // Assuming "CACHE_TIMEOUT" refers to a timeout value
    this.IS_BROWSER = false; // "IS_BROWSER" likely indicates if the code is running in a browser environment

    // Initialize WeakMaps for private fields
    this._privateField1 = new WeakMap();
    this._privateField2 = new WeakMap();
    this.scale = new WeakMap();
    this.someOtherField = new WeakMap();
    this.anotherField = new WeakMap();
    this.canvas = null;
    this.context = null;
    this.scaleFactor = 0;

    this.config = options;
    // Setting up values based on options
    if (this.config.mockupData) {
      this.layers = this.config.layers || [];
      this.layerBaseColor = this.config.layerBaseColor || "";
    }
    // ...similar for other fields
  }

  // Abstract method stubs
  async renderMockup() {
    // 检查参数的有效性
    if (!this.validateParams()) {
      throw new Error("Invalid params passed!");
    }

    // 准备渲染环境，可能包括加载所需资源或者初始化一些状态
    await this.prepareRendering();

    // 执行实际的渲染过程
    await this.performRendering();

    // 返回渲染结果，这里假设是返回一个Canvas对象
    return this.canvas;
  }

  createCanvas(width, height) {
    throw new Error("Method 'createCanvas' must be implemented by subclasses.");
  }

  loadImage(url) {
    throw new Error("Method 'loadImage' must be implemented by subclasses.");
  }

  fetchUrl(url) {
    throw new Error("Method 'fetchUrl' must be implemented by subclasses.");
  }

  createImageData(data, width, height) {
    throw new Error(
      "Method 'createImageData' must be implemented by subclasses."
    );
  }

  debugInfo(message) {
    if (this.config.debugMode) {
      console.info(message);
    }
  }

  // Private method implementations (simplified)
  setupInstance(options) {
    // Example: Initialize the instance with provided options
  }

  validateParams() {
    if (!this.mockupData || !this.printfileData) {
      console.error("Invalid parameters for generateMockup call", {
        mockupData: this.mockupData,
        printfileData: this.printfileData,
      });
      return false;
    }
    return true;
  }

  prepareRendering() {
    // Create a canvas with the mockup size
    this.canvas = this.createCanvas(
      this.config.mockupSize,
      this.config.mockupSize
    );
    this.context = this.canvas.getContext("2d");

    // Calculate the scaling factor based on the mockup data height
    this.scaleFactor = this.canvas.height / this.config.mockupData.height;

    // Adjust canvas width if mockup data width and height are not equal
    if (this.config.mockupData.width !== this.config.mockupData.height) {
      this.debugInfo("mockupData width !== height");
      this.canvas.width = this.config.mockupData.width * this.scaleFactor;
    }

    var layerTasks = [];

    // For each layer in the mockup data, prepare it
    for (var layer of this.layers) {
      this.prepareLayer(layer, layerTasks);
    }

    // Wait for all layer preparations to complete
    return Promise.all(layerTasks);
  }
  prepareLayer(layer, promisesArray) {
    let filePath = "";
    // 如果有子层，则递归处理
    if (layer.children) {
      layer.children.forEach((child) =>
        this.prepareLayer(child, promisesArray)
      );
    }

    if (layer.type === "MultiFileLayer") {
      // 选择文件
      let selectedFile =
        layer.files[this.config.layerParams[layer.paramName]] ||
        Object.values(layer.files)[0];
      filePath = selectedFile;
    } else if (layer.filePath) {
      filePath = layer.filePath;
    }

    // 替换路径中的尺寸占位符
    filePath = filePath.replace("[size]", this.config.mockupSize);

    if (layer.type === "PrintfileLayer") {
      // 获取打印文件预览路径
      const printfileData = this.config.printfileData[layer.fileType];
      filePath = printfileData ? printfileData.printfilePreview : filePath;
    }

    if (filePath) {
      let loadingPromise;
      if (layer.type === "DisplacementLayer") {
        // 加载位移图
        loadingPromise = this.loadDisplacementMap(filePath);
      } else {
        // 加载普通图像
        loadingPromise = this.loadNormalImage(filePath);
        // 暂时应该用不上
        // if (layer.type === "PrintfileLayer" && layer.options?.sticker_effect) {
        //   // 应用贴纸效果
        //   loadingPromise = loadingPromise.then((image) =>
        //     this.applyStickerEffect(image, layer.width)
        //   );
        // }
      }

      // 处理完成后保存结果
      loadingPromise = loadingPromise.then((result) =>
        this.imageCache.set(layer, result)
      );
      promisesArray.push(loadingPromise);
    }
  }
  async loadDisplacementMap(url) {
    let startTime = performance.now();
    // 检查是否已经缓存了位移图
    if (MockupCanvasBase.displacementMapCache[url]) {
      return MockupCanvasBase.displacementMapCache[url];
    }

    // 从URL获取位移图
    let displacementMap = await this.fetchUrl(url)
      .then((response) => response.arrayBuffer())
      .then((buffer) => {
        // 记录下载时间
        this.debugInfo(
          `Downloaded displacement map ${url} in ${
            performance.now() - startTime
          }ms`
        );

        // 解析位移图的头部信息
        let header = new Uint16Array(buffer, 0, 4);
        let width = header[1];
        let height = header[2];
        let dataSize = width * height;
        if (header[0] !== 0xffd8 || header[3] !== 0xffd9) {
          throw new Error("Invalid header!");
        }
        if (buffer.byteLength !== header.byteLength + 4 * dataSize) {
          throw new Error("Invalid data length!");
        }

        // 返回解析后的位移图数据
        return {
          isRaw: true,
          redData: new Uint16Array(buffer, 8, dataSize),
          greenData: new Uint16Array(buffer, 8 + 2 * dataSize, dataSize),
          width: width,
          height: height,
        };
      });

    // 将加载的位移图缓存起来
    MockupCanvasBase.displacementMapCache[url] = displacementMap;

    // 设置超时，从缓存中删除位移图
    if (this.IS_BROWSER) {
      setTimeout(() => {
        delete MockupCanvasBase.displacementMapCache[url];
      }, this.CACHE_TIMEOUT);
    }

    return displacementMap;
  }

  loadNormalImage(url) {
    // Check if the image is already in the cache
    let cache = MockupCanvasBase.imageCache;
    if (cache[url]) {
      return cache[url];
    }

    // If not in the cache, load the image
    let loadImagePromise = this.loadImage(url)
      .then((image) => {
        // Debug log for successful image load
        this.debugInfo("Loaded image", url.slice(0, 200));
        return image;
      })
      .finally(() => {
        // Clear the image from the cache after a specified timeout to prevent memory leaks
        if (this.IS_BROWSER) {
          setTimeout(
            () => delete MockupCanvasBase.imageCache[url],
            this.CACHE_TIMEOUT
          );
        }
      });

    // Store the promise in the cache and return it
    cache[url] = loadImagePromise;
    return loadImagePromise;
  }

  async performRendering() {
    // Log the start of rendering with the generator variant ID
    this.debugInfo(
      `Rendering with generatorVariantId: ${this.generatorVariantId}`
    );

    // Record the start time for performance measurement
    let startTime = performance.now();

    // Create a canvas with predefined width and height
    let canvas = this.createCanvas(this.width, this.height);
    let ctx = canvas.getContext("2d");

    // If there's a specific background color set for the mockup, fill the canvas with it
    if (this.layerBaseColor) {
      this.fillBackgroundColor(this.layerBaseColor, ctx);
    }

    // Iterate through some iterable collection (probably layers or objects to render)
    for (let key of Object.keys(this.layers)) {
      let item = this.layers[key];
      // Call a function to handle each item, possibly rendering it on the canvas
      await this.handleEachItem(item, ctx);
    }

    // Once all items are handled, draw the final image onto the primary canvas
    this.primaryCanvasContext.drawImage(canvas, 0, 0);

    // Log the rendering performance
    let endTime = performance.now();
    this.debugInfo(
      `Rendered in ${endTime - startTime} ms with generatorVariantId: ${
        this.generatorVariantId
      }`
    );
  }

  fillBackgroundColor(color, context) {
    // Set the fill style to the specified color
    context.fillStyle = color;
    // Fill the entire canvas area with this color
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  }

  async handleEachItem(layer, context) {
    // Return early if layer or context is not provided
    if (!layer || !context) return;

    let layerProcessed = false;

    // Check if the layer is a special type that requires a unique handling process
    if (layer.type === "DisplacementLayer") {
      await this.processDisplacementLayer(layer, context);
      return;
    }

    if (layer.type === "StoredLayer") {
      let storedLayer = this.storedLayers[layer.name];
      if (storedLayer) {
        this.imageCache.set(layer, storedLayer);
      } else {
        console.error("Stored layer not known: " + layer.name);
        return;
      }
    }

    // If the layer isn't already processed or cached
    if (!this.imageCache.has(layer)) {
      if (layer.children && layer.children.length) {
        let processedLayer = await this.processChildrenLayers(e);
        layerProcessed = true;
        this.imageCache.set(layer, processedLayer);
      } else {
        return; // No children to process, and layer isn't cached
      }
    }

    this.debugInfo(
      `Drawing layer ${layer.fileType} ${layer.filePath} ${layer.blendingMode}`,
      layer,
      this.scaleFactor,
      this.config.generatorVariantId
    );

    // Additional processing for layers based on their properties
    let layerCache = this.imageCache.get(layer);
    if (layer.storeAs) {
      this.storedLayers[layer.storeAs] = layerCache;
      return;
    }

    let layerLeft = layer.left * this.scaleFactor || 0;
    let layerTop = layer.top * this.scaleFactor || 0;
    let layerHeight = layerProcessed
      ? layerCache.height
      : layer.height * this.scaleFactor || context.canvas.height;
    let layerWidth = layerProcessed
      ? layerCache.width
      : layer.width * this.scaleFactor || context.canvas.width;

    if (!(layerWidth && layerHeight)) {
      console.error(
        "No width/height defined",
        context.canvas.width,
        context.canvas.height
      );
      return; // Exit the function if width or height calculation fails
    }

    context.globalCompositeOperation = this.resolveBlending(layer.blending);

    // Handle rotation
    if (layer.rotate) {
      let rotateAngle = (layer.rotate * Math.PI) / 180;
      let rotatedWidth =
        Math.abs(layerWidth * Math.cos(rotateAngle)) +
        Math.abs(layerHeight * Math.sin(rotateAngle));
      let rotatedHeight =
        Math.abs(layerHeight * Math.cos(rotateAngle)) +
        Math.abs(layerWidth * Math.sin(rotateAngle));

      context.translate(
        layerLeft + rotatedWidth / 2,
        layerTop + rotatedHeight / 2
      );
      context.rotate(rotateAngle);
      layerLeft = -layerWidth / 2;
      layerTop = -layerHeight / 2;
    }

    // Special handling for a specific layer type
    if (layer._type === LayerTypes.PrintfileLayer) {
      let printfileData = this.config.printfileData[layer.fileType];
      if (printfileData && printfileData.position) {
        layerCache = this.adjustLayerPosition(
          layerCache,
          printfileData.position,
          layerWidth,
          layerHeight
        );
      }
    }

    // Finally draw the layer on the canvas
    context.drawImage(
      layerCache,
      Math.floor(layerLeft),
      Math.floor(layerTop),
      Math.floor(layerWidth),
      Math.floor(layerHeight)
    );
    context.resetTransform();
    context.globalCompositeOperation = blendingModes.default; // Reset to default blending mode

    // Log the processed layer image for debugging
    this.debugLogImage(context.canvas);
  }

  processDisplacementLayer(layer, context) {
    // Retrieve the cached displacement map for the layer
    let displacementMap = this.imageCache.get(layer);

    // Log applying displacement
    this.debugInfo(
      `Applying displacement to ${layer.filePath}, size: ${displacementMap.width}x${displacementMap.height}`
    );

    // Record the start time for performance measurement
    let startTime = performance.now();

    // Apply the displacement effect to the displacement map
    let result = applyDisplacement(
      displacementMap,
      context.getImageData(0, 0, context.canvas.width, context.canvas.height),
      this.config.useInterpolation,
      this.config.debugMode
    );

    // Log the performance of applying the displacement
    this.debugInfo(
      `Finished displacement of ${layer.filePath} in ${
        performance.now() - startTime
      }ms`
    );

    // Create a new canvas to draw the displaced image
    let tempCanvas = this.createCanvas(result.width, result.height);
    let tempContext = tempCanvas.getContext("2d");

    // Convert the result to ImageData and put it on the temp canvas
    let imageData = this.createImageData(
      result.data,
      result.width,
      result.height
    );
    tempContext.putImageData(imageData, 0, 0);

    // Update the main canvas size to match the displaced image size
    context.canvas.width = this.canvas.width;
    context.canvas.height = this.canvas.height;

    // Clear the main canvas and draw the displaced image onto it
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.drawImage(
      tempCanvas,
      0,
      0,
      context.canvas.width,
      context.canvas.height
    );

    // Optionally log the final displaced image for debugging
    this.debugLogImage(context.canvas);

    // Log completion
    this.debugInfo(`Displacement process completed for ${layer.filePath}`);
  }

  debugLogImage(image) {
    // Check if console visual debugging is enabled and if running in a browser
    if (this.config.consoleVisualDebug && this.IS_BROWSER && image.toDataURL) {
      let scale = Math.min(1, 300 / image.height);
      let scaledWidth = image.width * scale;
      let scaledHeight = image.height * scale;

      // Create a CSS string for the background to visualize the image in the console
      let cssBackground = `
        background-color: #ccc;
        background-image: url('${image.toDataURL()}'),
          linear-gradient(45deg, #888 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, #888 75%),
          linear-gradient(45deg, transparent 75%, #888 75%),
          linear-gradient(45deg, #888 25%, transparent 25%);
        background-position: 0 0, 0 0, 0 0, -20px -20px, 20px 20px;
        background-repeat: no-repeat, repeat, repeat, repeat, repeat;
        background-size: ${scaledWidth}px ${scaledHeight}px, 40px 40px, 40px 40px, 40px 40px, 40px 40px;
        padding: ${scaledHeight / 2}px ${scaledWidth / 2}px;
        line-height: 1px;
        font-size: 1px;
        color: transparent;
      `;

      // Log the image dimensions
      console.info(`${image.width}x${image.height}`);

      // Use the CSS string to log a visual representation of the image
      console.info("%c+", cssBackground);
    }
  }

  resolveBlending(blendMode) {
    return blendingModes[blendMode] || blendingModes.default;
  }
}

// Example usage of class methods and properties for layer processing, caching, etc.
async function processLayer(e, r) {
  if (!e || !r) return;

  let layerProcessed = false;
  let canvasContext = r; // Assuming 'r' is a canvas rendering context

  // Early exit for layers that don't meet certain conditions
  if (e._type === LayerType.W) {
    this.applyDisplacementAndRender(e, r);
    return;
  }

  if (e._type === LayerType.M) {
    let storedLayer = this.storedLayers[e.name];
    if (storedLayer) {
      this.layerCache.set(e, storedLayer);
    } else {
      console.error("Stored layer not known: " + e.name);
      return;
    }
  }

  // If the layer isn't already processed or cached
  if (!this.layerCache.has(e)) {
    if (e.children && e.children.length) {
      let processedLayer = await this.processChildrenLayers(e);
      layerProcessed = true;
      this.layerCache.set(e, processedLayer);
    } else {
      return; // No children to process, and layer isn't cached
    }
  }

  // Additional processing for layers based on their properties
  let layer = this.layerCache.get(e);
  if (e.storeAs) {
    this.storedLayers[e.storeAs] = layer;
    return;
  }

  // Drawing the layer on the canvas
  let scaleX = e.left * this.scale || 0;
  let scaleY = e.top * this.scale || 0;
  let height = layerProcessed
    ? layer.height
    : e.height * this.scale || canvasContext.canvas.height;
  let width = layerProcessed
    ? layer.width
    : e.width * this.scale || canvasContext.canvas.width;

  if (!width || !height) {
    console.error(
      "no width/height defined",
      canvasContext.canvas.width,
      canvasContext.canvas.height
    );
    return;
  }

  canvasContext.globalCompositeOperation = this.resolveBlending(e.blending);

  // Handle rotation
  if (e.rotate) {
    let rotateAngle = (e.rotate * Math.PI) / 180;
    let rotatedWidth =
      Math.abs(width * Math.cos(rotateAngle)) +
      Math.abs(height * Math.sin(rotateAngle));
    let rotatedHeight =
      Math.abs(height * Math.cos(rotateAngle)) +
      Math.abs(width * Math.sin(rotateAngle));

    canvasContext.translate(
      scaleX + rotatedWidth / 2,
      scaleY + rotatedHeight / 2
    );
    canvasContext.rotate(rotateAngle);
    scaleX = -width / 2;
    scaleY = -height / 2;
  }

  // Special handling for a specific layer type
  if (e._type === LayerType.V) {
    let printfileData = this.printfileData[e.fileType];
    if (printfileData && printfileData.position) {
      layer = this.adjustLayerPosition(
        layer,
        printfileData.position,
        width,
        height
      );
    }
  }

  // Finally draw the layer on the canvas
  canvasContext.drawImage(
    layer,
    Math.floor(scaleX),
    Math.floor(scaleY),
    Math.floor(width),
    Math.floor(height)
  );
  canvasContext.resetTransform();
  canvasContext.globalCompositeOperation = "source-over"; // Reset to default blending mode

  // Log the processed layer image for debugging
  this.debugLogImage(canvasContext.canvas);
}

// Methods for handling displacements, blending modes, and utility operations
function applyDisplacementAndRender(layer, context) {
  // Retrieve the layer's cached data
  let layerData = this.layerCache.get(layer);

  // Log the start of the displacement application
  this.debugInfo(
    "Applying displacement",
    layerData.width,
    layerData.height,
    this.generatorVariantId
  );

  // Measure the time taken to apply the displacement
  let startTime = performance.now();

  // Apply displacement to the layer
  layerData = f.applyDisplacement(
    layerData,
    context.getImageData(0, 0, context.canvas.width, context.canvas.height),
    this.useInterpolation,
    this.debugMode
  );

  // Log the completion of the displacement
  this.debugInfo(
    `Finished displacement ${layer.filePath} (${
      performance.now() - startTime
    }ms)`,
    this.generatorVariantId
  );

  // Create a new canvas for the displaced layer
  let displacedCanvas = this.createCanvas(layerData.width, layerData.height);

  // Create ImageData from the displaced layer data
  let imageData = this.createImageData(
    layerData.data,
    layerData.width,
    layerData.height
  );

  // Draw the ImageData onto the new canvas
  displacedCanvas.getContext("2d").putImageData(imageData, 0, 0);

  // Adjust the original canvas size to match the displaced layer
  context.canvas.width = this.canvasWidth;
  context.canvas.height = this.canvasHeight;

  // Clear the original canvas and draw the displaced image onto it
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  context.drawImage(
    displacedCanvas,
    0,
    0,
    context.canvas.width,
    context.canvas.height
  );

  // Log the final displaced image for debugging
  this.debugLogImage(context.canvas);

  // Final debug log indicating the process is complete
  this.debugInfo("Done", this.generatorVariantId);
}

async function renderContent() {
  // Debugging start of rendering with a specific generator variant ID
  this.debugInfo("Rendering", this.generatorVariantId);

  // Start timing the rendering process
  let startTime = performance.now();

  // Create a canvas and get its 2D context
  let canvas = this.createCanvas(this.width, this.height);
  let context = canvas.getContext("2d");

  // Optionally process a background element if it exists
  if (this.backgroundElement) {
    this.processBackgroundElement(this.backgroundElement, context);
  }

  // Iterate over a collection of items and process each one
  for (let key of Object.keys(this.items)) {
    let item = this.items[key];
    await this.processLayer(item, context);
  }

  // Optionally draw a background color if specified
  if (this.mockupBackgroundColor) {
    this.fillBackgroundColor(this.mockupBackgroundColor, this.secondaryContext);
  }

  // Draw the rendered content onto a different context if needed
  this.secondaryContext.drawImage(canvas, 0, 0);

  // Debugging end of rendering with timing information
  let endTime = performance.now();
  this.debugInfo(
    `Rendered in ${endTime - startTime} ms.`,
    this.generatorVariantId
  );
}

function resolveBlendingMode(blendMode) {
  return blendingModes[blendMode] || blendingModes.default;
}

// Initialize static caches on the class
MockupCanvasBase.displacementMapCache = {};
MockupCanvasBase.imageCache = {};
export default MockupCanvasBase;
