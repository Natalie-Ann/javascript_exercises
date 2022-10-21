/*
Input: array, 2 additional optional arguments
Output: string of array values

Explicit rules: default separator is comma, default connector word is or; 
Implicit rules: empty string when empty array, no comma, just or between values if length of array is 2

Data Structure: string/array?


- Start function
  - iterate through array with separator and default connector
  - Return string
*/

function joinOr (array, separator = ', ', lastWord = 'or') {
  if (array.length === 2) {
    console.log(`${array[0]} or ${array[1]}`);
    }
  else if (array.length === 0) {
    console.log(`${'nothing here'}`);
  } else if (array.length === 1) {
    console.log(`${array[0]}`);
  } else if (array.length >= 2) {
    let newString = array.join(separator);
    let end = `${lastWord} ${newString.slice(-1)}`;
    let finalString = newString.slice(0, -2) + ` ${end}`;
    console.log(finalString);
  }
}


joinOr([1, 2, 3]);               // => "1, 2, or 3"
joinOr([1, 2, 3], '; ');         // => "1; 2; or 3"
joinOr([1, 2, 3], ', ', 'and');  // => "1, 2, and 3"
joinOr([]);                      // => ""
joinOr([5]);                     // => "5"
joinOr([1, 2]);                  // => "1 or 2"