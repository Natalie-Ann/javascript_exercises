/*
Write a function that takes a string argument and returns a list of substrings of that string. 
Each substring should begin with the first letter of the word, and the list should be ordered from shortest to longest.

Input: string
Output: array of substrings

Explicits:  - each substring begins with first letter of string
            - last substring is the entire string
Implicits:  - if single character string input, return that characer as only element in array

Data Structure: string --> iterating through the string to find all substrings --> returning those substrings in an array

Algorithm:
  - Start function with a string argument
    - Declare a variable outputArray initialized to empty array
    - Declare variable i initailzie at 0
    - Declare variable substring initialized to first character of string
    - Iterate through the string
      - While loop
        - for character in string, push substring to the empty array + the characters before it
    - Return the outputArray

*/

/*
function leadingSubstrings(string) {
  let outputArray = [];
  let i = 0;
  let substring = string[i];
  while (i < string.length) {
    outputArray.push(substring);
    substring += string[i+1];
    i += 1;
  }
  console.log(outputArray);
}

*/


function leadingSubstrings(string) {
  let outputArray = [];
  for (let i = 1; i <= string.length; i += 1) {
    outputArray.push(string.slice(0, i));
  }
  console.log(outputArray);
}



leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]