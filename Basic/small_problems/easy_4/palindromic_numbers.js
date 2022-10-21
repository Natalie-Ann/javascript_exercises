/*
Write a function that returns true if its integer argument is palindromic, or false otherwise. 
A palindromic number reads the same forwards and backwards.

Input: number
Output: Boolean

Explicits: return true if number is same forwards and backwards
Implicits: one digit always returns true

Data Structure: number --> array to reverse --> compare numbers ---> Boolean

Algorithm:
- Start function with number argument
  - Convert number to array
    - String, split methods
  - Reverse the array and save to variable reversedArray
    - Reverse method
  - Convert reversedArray to number
    - use join method
    - Number object
  - Compare numbers
    - if number === number, then true
  - Return Boolean

*/

function isPalindromicNumber (number) {
  number = String(number);
  let reversedNumber = number.split('').reverse().join('');
  return (reversedNumber === number);
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true