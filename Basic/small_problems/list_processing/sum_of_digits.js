//Write a function that takes one argument, a positive integer, and returns the sum of its digits. 
//Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum.

/*
Input: number
Output: number

Explicit rules: output number is sum of digits of argument number; need to use method calls
Implicit rules: no negative number arguments

Data structure: array

Algorithm:
- Start function w/number argument
  - Convert number to array
    - toString, then split
  - Use reduce method to add all element values
  - Convert back to number
  - Return that number

*/

function sum (number) {
  let numberArray = number.toString().split('');
  return numberArray.reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0);
  
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45