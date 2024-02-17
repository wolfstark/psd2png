// Function to set a property value on an object, with support for setter functions
export default function setProperty(t, e, r) {
    if (e.set) {
      // If a setter function is defined, call it with the provided value 'r'
      e.set.call(t, r);
    } else {
      // If no setter is defined, check if the property is writable
      if (!e.writable) {
        throw new TypeError("attempted to set read only private field");
      }
      // If writable, set the value directly
      e.value = r;
    }
  }
  
  // Explicitly mark the module as an ES Module
  setProperty.__esModule = true;
  