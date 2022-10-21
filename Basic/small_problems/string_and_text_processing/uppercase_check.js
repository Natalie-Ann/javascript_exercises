/*
Write a function that takes a string argument and returns 
true if all of the alphabetic characters inside the string are uppercase; false otherwise. 
Ignore characters that are not alphabetic.

Input: string
Output: Boolean

Explicits:  - Returns true if all alphabetic characters in string are uppercase
            - ignore non-alphabetic characters/spaces
Implicits:  - Empty string returns true

Data Structure: string --> array check --> boolean

Algorithm:
- Start function with string argument
  - if empty string, return false
  - Make a copy of the string and convert to all uppercase
    - Declare a variable allCapsCopy and initialize it to string.toUpperCase()
  - Conditional expression to compare values
    - if string === allCapsCopy return true
*/

function isUppercase(string) {
  let allCapsCopy = string.toUpperCase();
  return allCapsCopy === string;
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true