// Create a Promise that resolves with a value of "Launch School" after a delay of 2000ms, using setTimeout. Print the Promise's resolved value by using the then method.

let newPromise = new Promise((resolve, reject) => setTimeout(() => resolve('Launch School'), 2000)).then((value) => console.log(value));

console.log(newPromise);

// newPromise.then((value) => console.log(value));

// const promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve('Launch School');
//     }, 2000);
//   });

//   promise.then(function(value) {
//     console.log(value)
//   });