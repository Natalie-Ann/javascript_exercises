//Write a function that takes a non-empty string argument and returns the middle character(s) of the string. 
//If the string has an odd length, you should return exactly one character. 
//If the string has an even length, you should return exactly two characters.

/*
Input: string
Output: string

Explicit rules: return middle character(s) of argument string; if string.lenght is odd, return one character; if even return 2 characters
Implicit rules: if one character long, return that character; spaces count as middle of the string argument/count as characters

Data structure: array

Algorithm:
- Start function
  - if string.length is odd:
    - divide by 2 and round down (?)
    - return that character
  - if string.length is even:
    - divide string in two
    - return character at end of the first half plus character at beginning of second half

*/

function centerOf (string) {
  if (string.length % 2 === 0) {
    let secondCharacter = string[string.length/2];
    let firstCharacter = string[(string.length/2) -1];
    return firstCharacter + secondCharacter;
  } else {
    return string[Math.floor(string.length/2)];
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"