// Write a function that takes 5 string arguments, and returns an object with 3 properties:

// first: the first argument
// last: the last argument
// middle: the middle 3 arguments as a sorted array
// After writing the function, write some code to call the function. The arguments you provide should come from an array. 
// You should create local variables named first, last, and middle from the return value.

// Use shorthand syntax wherever you can.

function shortHand(str1, str2, str3, str4, str5) {
  return {
    first: str1,
    last: str5,
    middle: [str2, str3, str4].sort(),
  };
}

let array = ['I', 'am', 'trying', 'to', 'do'];
// console.log(shortHand(...array));
let {first, last, middle} = shortHand(...array);
console.log(first);
console.log(last);
console.log(middle);
