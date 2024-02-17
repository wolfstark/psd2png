// Assuming the actual module paths based on the webpack resolution IDs provided
import DefineProperty from "./path/to/defineProperty"; // Placeholder for r(416)

class PFMockupCanvasPar {
  constructor() {
    // Directly define properties on the instance
    DefineProperty(this, "mockupSize", 200);
    DefineProperty(this, "mockupData", null);
    DefineProperty(this, "printfileData", null);
    DefineProperty(this, "generatorVariantId", null);
    DefineProperty(this, "consoleVisualDebug", false);
    DefineProperty(this, "useInterpolation", false);
    DefineProperty(this, "layerParams", {});
    DefineProperty(this, "mockupBackgroundColor", null);
    DefineProperty(this, "debugMode", false);
  }

  // Instance methods would go here
}

// Export the class for use in other modules
export { PFMockupCanvasPar };
