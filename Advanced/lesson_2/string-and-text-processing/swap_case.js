// Write a function that takes a string as an argument and returns that string with every lowercase letter changed to uppercase and every 
// uppercase letter changed to lowercase. 
// Leave all other characters unchanged.

/*
Input: string
Output: string

Explicits: - outuput string reverses case for letters only
Implicits:  - ignore non-letter characters

DS: arrays

Algorithm:
- Initialize variable charArray assigned to string split into characters
- Iterate through the charArray
    - map new array
    - if char is a letter, change the case
    - return the char
- Join the array into a string
- Return the string
*/

// function swapCase(string) {
//     let charArray = string.split('');
//     let newArray = charArray.map(char => {
//         if (char.match(/[a-z]/g)) {
//             char = char.toUpperCase();
//         } else if (char.match(/[A-Z]/g)) {
//             char = char.toLowerCase();
//         }
//         return char;
//     });
//     console.log(newArray.join(''));
// }

function swapCase(string) {
    console.log(string.replace(/\w/g, char => /[A-Z]/.test(char)? char.toLowerCase(): char.toUpperCase()));
}


swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"