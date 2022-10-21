// Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

// If the input is not an array, return undefined.
// If the input is an empty array, return an empty array.
// Review the test cases below, then implement the solution accordingly.

/*
Input: array
Output: array

Explicits:  - output array is a new array with first element moved to the end of the original array
            - if input is empty array return empty array
            - if input is not an array return undefined
Implicits:  - if array has one element, return same array

DS: arrays

Algorithm:
- if input is not an array return undefined
- if input is an empty array return empty array

- make copy of input array (slice)
    - remove first element from copy (shift?)
    - push removed element to the end of the array
- return copied array

*/

function rotateArray(array) {
    if (!Array.isArray(array)) return undefined;
    if (array.length === 0) return array;

    let copy = array.slice();
    let removedElement = copy.shift();
    copy.push(removedElement);
    return copy;
}


console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]