/* Write a function that takes an array of integers as input, multiplies all of the integers together, 
divides the result by the number of entries in the array, 
and returns the result as a string with the value rounded to three decimal places.

Input: array of integers
Output: string 

Explicits: result string rounded to 3 decimals; result is an average of integers in array
Implicits: avg = sumOfElements/array.length

Data structure: array

Algorithm:
- Start function w/array argument
  - Sum elements in array and save to a variable SUM
    - set sum equal to 0
    - reduce method
    - for loop 
      - initialization: i = 0
      - stopping condition: i < length of input array
      - iteration statement: i += 1
        - sum = sum + array[i]
  - Get average using the sume and array.length
    - round to 3 decimals using toFixed method
  - Return average

*/

function multiplicativeAverage (array) {
  let multiple_sum = 1;
  for (let i = 0; i < array.length; i += 1) {
    multiple_sum = multiple_sum * array[i];
  }
  let average = (multiple_sum)/array.length;
  console.log(average.toFixed(3));
}


multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"