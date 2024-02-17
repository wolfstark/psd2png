class CustomCanvas extends PFMockupCanvasBase {
  constructor(params) {
    super(params);
    this.createCanvas = (width, height) => new OffscreenCanvas(width, height);
    this.fetchUrl = self.fetch.bind(self); // Ensuring 'fetch' is bound correctly in a worker context
    this.IS_BROWSER = true; // This might be used to differentiate execution context
  }

  loadImage(url) {
    return fetch(url, { mode: "cors" }) // Fetch the image with CORS mode
      .then((response) => response.blob()) // Convert the response to a blob
      .then((blob) => createImageBitmap(blob)); // Create an image bitmap from the blob
  }

  createImageData(width, height, depth) {
    return new ImageData(width, height, depth); // Create new image data with the specified dimensions
  }
}

// Web worker's message event listener
onmessage = (event) => {
  const params = event.data.params;
  const canvas = new CustomCanvas(params);

  canvas
    .renderMockup()
    .then((result) => {
      if (event.data.returnAsUrl) {
        // Convert the result to a blob URL if specified
        return result.convertToBlob().then((blob) => {
          const url = URL.createObjectURL(blob);
          postMessage({ messageId: event.data.messageId, response: url });
        });
      }
      // Otherwise, transfer the image bitmap directly
      const imageBitmap = result.transferToImageBitmap();
      postMessage({ messageId: event.data.messageId, response: imageBitmap }, [
        imageBitmap,
      ]);
    })
    .catch((error) => {
      // Handle errors by posting back an error message
      postMessage({ messageId: event.data.messageId, error: error });
      throw error;
    });
};
