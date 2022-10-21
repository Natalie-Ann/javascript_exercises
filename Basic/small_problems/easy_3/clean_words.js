/*Given a string that consists of some words and an assortment of non-alphabetic characters, 
write a function that returns that string with all of the non-alphabetic characters replaced by spaces. 
If one or more non-alphabetic characters occur in a row, you should only have one space in the result 
(i.e., the result string should never have consecutive spaces). */

/*
Input: string
Output: string
Explicit rules: return string with non-alphabetic characters replaced by spaces; if 2+ consecutive spaces, change to 1 space
Implicit rules: define alphabet

Data structure: strings

Algorithm:
- Create function cleanUp
  - create alphabet variable string with alphabet letter values
  - Loop through length of string argument
    - If element is not included in alphabetic values 
      - replace nonalphabetic characters with spaces and save to newString variable
         -  Loop through newString
                - check if consecutive spaces, if yes, replace with 1 space
  - return newString

*/

function cleanUp (string) {
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let newArray = string.split('');
 for (let i = 0; i < newArray.length; i += 1) {
    if (!alphabet.includes(newArray[i])) {
      newArray[i] = ' ';
   }
  }
    for (let j = 0; j < newArray.length; j += 1) {
      if ((newArray[j] === ' ') && (newArray[j+1] === ' ')) {
      newArray[j] = '';
      }
    }
  console.log(newArray.join(''));
}

cleanUp("---what's my +*& line?");    // " what s my line "