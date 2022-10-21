//Write a function that takes a string, doubles every character in the string, and returns the result as a new string.

/*
Input: string
Output: string

Explicit rules: double every character in string,
Implicit rules: if empty string, return empty string; if spaces between words, double the spaces; double the punctuations

Data structure: array

Algorithm:
- Create function that takes string argument
  - Change string to an array using split method
  - if string.length = 0, return string
  - Iterate through array, double characters, return new array
    - map method to return new array with all characters accounted for
      - map callback function to double each character
        - return element + element (?)
  - Change array back to a string and return new string; join- 
*/

function repeater(string) {
  if (string.length === 0) {
    return string;
  }
  
  let stringArray = string.split('');
  let doubleStringArray = stringArray.map(element => element + element);
  return doubleStringArray.join('');
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""