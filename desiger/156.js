function asyncGeneratorStep(
  generator,
  resolve,
  reject,
  next,
  throw_,
  key,
  arg
) {
  try {
    var info = generator[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(next, throw_);
  }
}

// Wraps a generator function to be used as an async function
function asyncGeneratorWrapper(fn) {
  return function () {
    var self = this,
      args = arguments;

    // Return a new promise that handles the generator's execution
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function stepForward(arg) {
        asyncGeneratorStep(
          gen,
          resolve,
          reject,
          stepForward,
          stepBackward,
          "next",
          arg
        );
      }

      function stepBackward(arg) {
        asyncGeneratorStep(
          gen,
          resolve,
          reject,
          stepForward,
          stepBackward,
          "throw",
          arg
        );
      }

      // Start the generator execution
      stepForward(undefined);
    });
  };
}

// Mark the module as an ES Module
asyncGeneratorWrapper.__esModule = true;
// Also set the wrapper as the default export
export default asyncGeneratorWrapper;
