/*Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two. 
There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. 
You may assume that both arguments will always be arrays.

Input: 2 arrays
Output: 1 array

Explicits: returned array combines argument arrays and removes duplicate values
Implicits: none

Data Structure: array

Algorithm: 
- Start function w/2 array arguments
  - Merge arrays
    - Use push method to push second array as last element of first array
    - Use flat method to un-nest the arrays
  - Create new array with duplicates filtered out
    - start empty array
    - if comboArrrys includes that values, skip, otherwise push
  - Return new array
*/

function union(array1, array2) {
  array1.push(array2);
  let comboArrays = array1.flat();
  let newArray = [];
  for (let i = 0; i < comboArrays.length; i += 1) {
      if (!(newArray.includes(comboArrays[i]))) {
      newArray.push(comboArrays[i]);
      }
  }
  return newArray;
}



console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]