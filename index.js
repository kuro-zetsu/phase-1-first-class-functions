function receivesAFunction(callback) {
  callback()
}

returnsANamedFunction = function() {
  return function hello() {
    console.log('Hello')
  }
}

returnsAnAnonymousFunction = function() {
  return () => console.log('Hello')
}

