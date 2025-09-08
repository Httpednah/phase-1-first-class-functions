// 1. receivesAFunction: takes a callback and calls it
function receivesAFunction(callback) {
  callback();
}

// 2. returnsANamedFunction: returns a named function
function returnsANamedFunction() {
  function namedFunction() {
    console.log("I'm a named function!");
  }
  return namedFunction;
}

// 3. returnsAnAnonymousFunction: returns an anonymous function
function returnsAnAnonymousFunction() {
  return function () {
    console.log("I'm an anonymous function!");
  };
}
