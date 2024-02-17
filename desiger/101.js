// Calculates the index in the displacement or image data array
function calculateIndex(x, y, width, bytesPerPixel = 4) {
  return (y * width + x) * bytesPerPixel;
}

// Computes the weight for bilinear interpolation
function computeWeight(x1, y1, x2, y2) {
  return (1 - Math.abs(x1 - x2)) * (1 - Math.abs(y1 - y2));
}

// Main function to apply displacement
export function applyDisplacement(
  displacementMap,
  sourceImage,
  useInterpolation = false,
  logPerformance = false
) {
  // Start measuring performance if logging is enabled
  let startTime = logPerformance ? performance.now() : null;

  // Initialize dimensions and create an array for the displaced pixels
  let targetWidth = displacementMap.width;
  let targetHeight = displacementMap.height;
  let displacedPixels = new Uint8ClampedArray(targetWidth * targetHeight * 4);

  // Calculate scale factors between the displacement map and the source image
  let scaleX = sourceImage.width / targetWidth;
  let scaleY = sourceImage.height / targetHeight;
  let sourceWidth = sourceImage.width;
  let sourceData = sourceImage.data;

  // Iterate over each pixel in the displacement map
  for (let y = 0; y < targetHeight; y++) {
    for (let x = 0; x < targetWidth; x++) {
      let index, red, green, displacementX, displacementY, sourceIndex;

      // Handle raw displacement maps with separate red and green data
      if (displacementMap.isRaw) {
        index = calculateIndex(x, y, targetWidth, 1);
        red = displacementMap.redData[index];
        green = displacementMap.greenData[index];

        // Skip processing if both red and green data are zero
        if (red === 0 && green === 0) continue;
        index *= 4;
      } else {
        // For non-raw maps, retrieve displacement data directly
        index = calculateIndex(x, y, targetWidth);
        if (displacementMap.data[index + 3] === 0) continue;
        red = displacementMap.data[index];
        green = displacementMap.data[index + 1];
      }

      // Calculate the displacement using the red and green channels
      displacementY = (y + 2 * targetHeight * (green / 65535 - 0.5)) * scaleY;
      displacementX = (x + 2 * targetWidth * (red / 65535 - 0.5)) * scaleX;

      // Apply interpolation if enabled
      if (useInterpolation) {
        let floorX = Math.floor(displacementX);
        let floorY = Math.floor(displacementY);
        for (let i = 0; i <= 3; i++) {
          displacedPixels[index + i] =
            sourceData[calculateIndex(floorX, floorY, sourceWidth) + i] *
              computeWeight(floorX, floorY, displacementX, displacementY) +
            sourceData[calculateIndex(floorX + 1, floorY, sourceWidth) + i] *
              computeWeight(floorX + 1, floorY, displacementX, displacementY) +
            sourceData[calculateIndex(floorX, floorY + 1, sourceWidth) + i] *
              computeWeight(floorX, floorY + 1, displacementX, displacementY) +
            sourceData[
              calculateIndex(floorX + 1, floorY + 1, sourceWidth) + i
            ] *
              computeWeight(
                floorX + 1,
                floorY + 1,
                displacementX,
                displacementY
              );
        }
      } else {
        sourceIndex = calculateIndex(
          Math.round(displacementX),
          Math.round(displacementY),
          sourceWidth
        );
        displacedPixels[index] = sourceData[sourceIndex];
        displacedPixels[index + 1] = sourceData[sourceIndex + 1];
        displacedPixels[index + 2] = sourceData[sourceIndex + 2];
        displacedPixels[index + 3] = sourceData[sourceIndex + 3];
      }
    }
  }

  if (logPerformance) {
    console.log(`Finished displacement in ${performance.now() - startTime}ms`);
  }

  return { data: displacedPixels, width: targetWidth, height: targetHeight };
}
