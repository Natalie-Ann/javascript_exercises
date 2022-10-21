/*Write a function that takes a string argument and returns a new string containing the words from the string argument in reverse order.

Input: string
Output: string

Explicits: output string is reverse order of words
Implicits:

Data structure: sting --> array --> string

Algorithm:
- Start function w/string argument
  - Convert string to an array
    - use the split method with space separator
    - save to variable newArray
  - Use reverse method on newArray to reverse the words
  - Convert newArray to string
    - Use join method
  - Return newArray
*/

function reverseSentence (string) {
  let array = string.split(' ');
  let newString = array.reverse().join(' ');
  return newString;
}

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"