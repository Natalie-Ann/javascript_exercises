/*
Write a function that takes one integer argument, which may be positive, negative, or zero. 
This method returns true if the number's absolute value is odd. You may assume that the argument is a valid integer value.

Input: number
Output: Boolean

Explicits:  - output returns true if absolute value (no negative) is an odd number

Algorithm:
- Start function with number argument
  - if number % 2 === 1 or -1, return true
*/

function isOdd(number) {
console.log(number % 2 === 1 || number % 2 === -1);
}


isOdd(2); // => false
isOdd(5); // => true
isOdd(-17); // => true
isOdd(-8); // => false
isOdd(0); // => false
isOdd(7); // => true