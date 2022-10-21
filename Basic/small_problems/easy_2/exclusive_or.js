/*
In this exercise, you will write a function named xor that takes two arguments, 
and returns true if exactly one of its arguments is truthy, false otherwise. 
Note that we are looking for a boolean result instead of a truthy/falsy value as returned by || and &&.

Input: two values (numbers, booleans)
Output: Boolean

Explicits:  - output is true when only one of the arguments is truthy
Implicits:  - if both arguments truthy, returns false

Data Structure: values --> Boolean

Algorithm:
  - Start funciton with 2 arguments
    - if first argument is falsy
      - return true if second argument is truthy
    - if first argument is truthy
      - return true if second argument is falsy

*/

function xor(value1, value2) {
 if (!value1) {
   if (value2) {
     return true;
   }
 } else if (value1) {
   if (!value2) {
     return true;
   }
 } else if (value1) {
    if (value2) {
      return false;
    }
  }
}



console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);