//Write a function that takes a positive integer as an argument and returns that number with its digits reversed.

/*
Input: positive integer
Output: positive integer

Explicit rules: digits reversed; 0s in front get dropped
Implicit rules: number, no string

Data structure: array

Algorithm:
- Start function with number argument
  - convert number to an array
  - use reverse method on that array
  - delete values in front until reach number >0 -- taken care of because number data type
  - convert array to string and back to number
*/

function reverseNumber (number) {
  let stringNumber = String(number).split('').reverse();
  return Number(stringNumber.join(''));
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1