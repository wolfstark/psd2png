// Utility function to ensure a class instance is properly initialized
export default function ensureInitialized(instance) {
  if (instance === undefined) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return instance;
}
