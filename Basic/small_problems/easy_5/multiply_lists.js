/*
Write a function that takes two array arguments, each containing a list of numbers, 
and returns a new array that contains the product of each pair of numbers from the arguments that have the same index. 
You may assume that the arguments contain the same number of elements.

Input: 2 arrays with same length
Output: 1 array, same length

Explicits: return array is product of same index pairs
Implicits: integers? 

Data structure: array
array1[0] * array2[0]
array1[1]* array2[1]

Algorithm:
- Start function
  - Create empty array variable called newArray
  - Start a FOR loop
    - initializaton: let i = 0
    - stopping condition: array.length (either array)
    - iteration statement: i += 1
      - newArray[i] = array1[i] * array2[i]
  - Return newArray
*/

function multiplyList (array1, array2) {
  let newArray = [];
  for (let i = 0; i < array1.length; i += 1) {
    newArray[i] = array1[i] * array2[i];
  }
  return newArray;
}


console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]