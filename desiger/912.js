// Defines a function to get a property value, supporting properties with getters
export default function getProperty(t, e) {
    return e.get ? e.get.call(t) : e.value;
  }
  
  // Mark the module as an ES Module
  getProperty.__esModule = true;
  