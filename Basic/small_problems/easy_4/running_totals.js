/*
Write a function that takes an array of numbers and returns an array with the same number of elements, 
but with each element's value being the running total from the original array.

Input: array of numbers
Output: array of number

Explicits: output array has running total of input array numbers
Implicits:  - input and output arrays are same length
            - empty array returns empty array
            - all positive numbers
            - first element always the same
            - last element of output is sum of elements of first array
            
Running total = inputArray[0], inputArray[0] + inputArray[1] = outputArray[1], outputArray[1] + inputArray[2] = outputArray[2]...

Data Structure: array --> array

Algorithm:
- Start function with array argument
  - create empty array variable outputArray
  - FOR loop
    - initalization: i = 1
    - stop condition: i < array.length
    - iteration statement:i += 1
      - Add elements to outputArray that are running totals of input array element
        - outputArray[0] = inputArray[0]
        - outputArray[i] = outputArray[i-1] + array[i] 
    - Return outputArray
*/

function runningTotal (array) {
  let outputArray = [];
  outputArray[0] = array[0];
  if (array.length === 0) {
    return [];
  }
  for (let i = 1; i < array.length; i += 1) {
    outputArray[i] = outputArray[i-1] + array[i];
  }
  return outputArray;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []