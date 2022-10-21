/*Write a function that takes one argument, an array of integers, and returns the average of all the integers in the array, 
rounded down to the integer component of the average. The array will never be empty, and the numbers will always be positive integers.

Input: array
Output: number

Explicits: one array argumetn, return average of numbers within array, round down to integer, array argument always positive numbers, never empty array
Implicits: 
  - avg = Math.floor(sumOfNums/array.length);
  

Data structure: 

Algorithm: 
- Start function
  - Get sum of integers in array
    - Use reduce method to return sum of values
  - Get average of the integers
    - let average = Math.floor(sum / array.length)
  - Return the average

*/

function average (array) {
  let sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  let average = Math.floor(sum / array.length);
  return average;
}



console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40