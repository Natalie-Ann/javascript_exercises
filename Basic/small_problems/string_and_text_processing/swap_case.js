/*
Write a function that takes a string as an argument and 
returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase.
Leave all other characters unchanged.

Input: string
Output: string

Explicits:  - output string switches the case of the letter
            - non alphabetic character are not changed
Implicits:  - keep spaces, punctuation unchanged

Data Structure: string --> array of characters, if alpha, switch case --> new string

Algorithm:
  - Start function with string argument
    - Declare variable alphabet and initialize to alphabet characters upper and lowercase
    - Convert string to array of characters named characterArray
    - Iterate through characterArray
      - if character is included in alpha variable, switch the case
      - if no included in alpha variable, continue
    - Convert characterArray to a string
    - Return the new string

*/

function swapCase(string) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let characterArray = string.split('').map(character => {
    if (alphabet.includes(character)) {
      if (character.toUpperCase() === character) {
        return character = character.toLowerCase();
      } else {
        return character = character.toUpperCase();
      }
    } else {
      return character;
    }
  });
  console.log(characterArray.join(''));
}


swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"