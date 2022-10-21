// Write a function that takes a string argument and returns a list of substrings of that string. 
// Each substring should begin with the first letter of the word, and the list should be ordered from shortest to longest.

/*
Input: string
Output: array

Explicits:  - output array is list of substrings of the input string starting with first letter of that string
            - list ordered from shortest to longest
Implicits:  - string will not be empty?
            - no non-alpha characters?

DS: string --> array

Algorithm (for loop):
- Iterate through string
- Push to an array making substrings
    - for every element, slice from 0, current element + 1
- Return new array

Algorithm (map):
- Split string into array of characters
- Map new array taking slices of character array
- Flatten and return the array

*/

// function leadingSubstrings(string) {
//     let array = [];
//     for (let i = 0; i < string.length; i += 1) {
//         array.push(string.slice(0, i + 1));
//     }
//     return array;
// }

function leadingSubstrings(string) {
    let charArray = string.split('');
    let subStringsArray = charArray.map((_, index, array) => {
        return array.slice(0, index + 1).join('');
    });
    return subStringsArray;
}


leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]