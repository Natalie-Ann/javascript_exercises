// Write a function named makeMultipleLister that you can call with a number as an argument. 
// The function should return a new function that, when invoked, logs every positive integer multiple of that number less than 100. 
// It should work like this:

function makeMultipleLister(number) {
  return function () {
    for (let i = number; i < 100; i += number) {
      console.log(i);
    }
  };
}

let lister = makeMultipleLister(17);
console.log(lister());

/* Output
17
34
51
68
85
*/