// Path/filename: replace-smart-object.js
// Purpose: Replace the image in a smart object within a PSD file and export the result as a PNG.

import * as fs from 'fs';
import { readPsd, writePsdBuffer } from "ag-psd";
import "ag-psd/dist/initializeCanvas.js";

function updateLayerSmartObject(layer, { image }) {
  if (!layer.smartObject) {
    throw new Error("Layer is not a smart object");
  }

  // Replace the smart object's image data
  layer.smartObject.image = image;
}

async function replaceSmartObjectAndExportPng(
  psdPath,
  replacementImagePath,
  outputPath
) {
  // Load the original PSD
  const psdBuffer = fs.readFileSync(psdPath);
  const psd = readPsd(psdBuffer);

  // Load the replacement image as a buffer
  const replacementImageBuffer = fs.readFileSync(replacementImagePath);

  // Find the "Cloth" smart object layer
  const clothLayer = findLayerByName(psd.children, "BRAND HERE");
  if (!clothLayer) {
    console.error("Cloth smart object not found");
    return;
  }

  // Replace the smart object content
  updateLayerSmartObject(clothLayer, { image: replacementImageBuffer });

  // Write the updated PSD to a buffer and export as PNG
  const updatedPsdBuffer = writePsdBuffer(psd);
  const pngBuffer = await exportPng({ canvas: updatedPsdBuffer });

  // Save the PNG file
  fs.writeFileSync(outputPath, pngBuffer);
  console.log("Exported PNG to", outputPath);
}

function findLayerByName(layers, name) {
  for (const layer of layers) {
    if (layer.name === name) return layer;
    if (layer.children) {
      const found = findLayerByName(layer.children, name);
      if (found) return found;
    }
  }
  return null;
}

// Example usage
replaceSmartObjectAndExportPng(
  "./tshirt_back-恢复的.psd",
  "./00019-1250358227.png",
  "./merged_image.png"
)
  .then(() => console.log("Done"))
  .catch(console.error);
