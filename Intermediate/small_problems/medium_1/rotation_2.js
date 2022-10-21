/*
Write a function that rotates the last count digits of a number. 
To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.

Input: number, digits want rotated
Output: rotated number

Explicits: - count = number of digits affected
Implicits: - first digit gets moved to end of number, other digits shift left

Data Structure: number --> array --> number

Algorithm:
- Start function w/2 arguments, number and count
  - Convert number to an array of digits using slice, then split (?) and save value to variable digitsArray
  - Use splice method on array to delete the value at length of array - (count + 1) and then push to the end of the array
  - Use join method to convert array to a string and then Number method to convert to number. Return this value
*/

function rotateRightmostDigits(number, count) {
  let digitsArray = String(number).split('');
  let rotatedDigit = digitsArray.splice(digitsArray.length - count, 1);
  digitsArray.push(rotatedDigit);
  console.log(Number(digitsArray.join('')));
}


rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917