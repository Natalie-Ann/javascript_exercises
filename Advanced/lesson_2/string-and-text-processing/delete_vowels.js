// Write a function that takes an array of strings and returns an array of the same string values, but with all vowels (a, e, i, o, u) removed.

/*
Input: array of strings
Output: array of string with vowels removed

Explicits:  - output array will have no vowels
Implicits:  - case insensitive
            - if all characters in string are vowels, then output will be empty string

DS: arrays

Algorithm:
- Iterate through the input array
    - Map a new array
        - For each string element
            - iterate through the string
                -  if char in string is vowel, replace with empty space
- Return new mapped array

*/

// function removeVowels(stringArray) {
//     let newArray = stringArray.map(string => string.split('').map(char => {
//         if ('aeiouAEIOU'.includes(char)) {
//             char = '';
//         }
//         return char;
//     }).join(''))
//     console.log(newArray);
// }

function removeVowels(array) {
    return array.map(string => string.replace(/[aeiou]/gi, ''));
  }

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]