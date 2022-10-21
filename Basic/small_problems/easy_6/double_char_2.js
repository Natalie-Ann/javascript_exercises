//Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. 
//The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

/*
Input: string
Output: string

Explicit rules: doubles every consonant, does not double vowels, digits, punctuation, or whitespace
Implicit rules: empty string returns empty string

Data structure: array

- Start function with string argument
  - Convert string argument to array
  - Declare variable array with list of vowels
    - Iterate through the string array
      - Use map method
        - if , double the character
        - else return character
  - Convert array back into a string
  - Return string

*/

function doubleConsonants(string) {
  let stringArray = string.split('');
  let consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  let doubledStringArray = stringArray.map(function consonantFinder (character) {
    if (consonants.includes(character.toLowerCase())) {
      return character + character;
    } else {
      return character;
    }
  });
  return doubledStringArray.join('');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""

