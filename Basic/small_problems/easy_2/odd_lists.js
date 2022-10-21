/*Write a function that returns an Array that contains every other element of an Array that is passed in as an argument. 
The values in the returned list should be those values that are in the 1st, 3rd, 5th, and so on elements of the argument Array.*/

/*
Input: array
Output: array
Explicit rules: argument is an array, returned array has only values from odd indexes of the argument array

- Iterate through argument array
  - filter for odd indexes
    - loop:
      - if index is odd number, save index to array
      - if index is even, continue to next iteration
    - return array with odd indexes
    
*/

function oddities (array) {
  let newArray = [];
  for (let i = 0; i < array.length; i += 2) {
  newArray.push(array[i]);
  };
  return newArray;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
//console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
//console.log(oddities(["abc", "def"])); // logs ['abc']
//console.log(oddities([123])); // logs [123]
//console.log(oddities([])); // logs []