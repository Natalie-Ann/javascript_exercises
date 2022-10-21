/*
Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

If the input is not an array, return undefined.
If the input is an empty array, return an empty array.

Inout: array
Output: array

Explicits:  - move first element of array to end of array
            - do not change original array
            - if input not array, return undefined
            - if input empty array, return empty array
Implicits:  - one element array returns same array

Data Structure: array --> array

Algorithm:
  - Check if input is array
    - if not array, return undefined
  - If array.length is 0, return []
  - if array.length = 1, return array
  - else...Make copy of array using array.slice() assign to variable copiedArray
    - create variable set equal to first element of array
    - use shift method on copiedArray to remove element
     - use push method to add first element to copiedArray
    - return copiedArray

*/

function rotateArray(array) {
  if (Array.isArray(array) === false) {
    return undefined;
  } else if (array.length === 0) {
    return [];
  } else if (array.length === 1) {
    return array;
  } else {
    let copiedArray = array.slice();
    let firstElement = copiedArray[0];
    copiedArray.shift();
    copiedArray.push(firstElement);
    return copiedArray;
  }
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]