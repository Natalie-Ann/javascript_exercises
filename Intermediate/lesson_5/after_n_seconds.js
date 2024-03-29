// Write a function named afterNSeconds that takes two arguments: a callback and a time duration in seconds. 
// It should wait for the indicated period, then invoke the callback function.

function afterNSeconds(callback, seconds) {
  setTimeout(callback, seconds * 1000);
}

let exampleCallback = function () {
  console.log('it works');
};

afterNSeconds(exampleCallback, 1);