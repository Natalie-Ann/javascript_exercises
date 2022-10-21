/*Write a function that takes an array as an argument and returns an array that contains two elements, each of which is an array. 
Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. 
If the original array contains an odd number of elements, place the middle element in the first half array.

Input: array
Output: array of arrays

Explicits: first array element is first half of argument array, second array element is second half of argument array; if array.length is odd, 
include middle element in first half
Implicits: empty array returns 2 empty arrays, if only one element in argument array, still returns 2 arrays w/in array

Data structure: arrays
if array.length % 2 === 0, then first half = array.slice(0, array.length/2)
second half = array.slice(array.length/2)

if array is odd, then 
first half = array.slice(array.slice(0, Math.floor(array.length/2)))
second half = array.slice(Math.floor(array.length/2))

Algorithm:
- Start function
  - if array.length % 2 === 0
  - else: 
*/

function halvsies (array) {
  let firstHalf;
  let secondHalf;
  if (array.length % 2 === 0) {
    firstHalf = array.slice(0, array.length/2);
    secondHalf = array.slice(array.length/2);
  } else {
    firstHalf = array.slice(0, (Math.floor(array.length/2) + 1));
    secondHalf = array.slice(Math.floor(array.length/2) + 1);
  }
  return [firstHalf, secondHalf];
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]

