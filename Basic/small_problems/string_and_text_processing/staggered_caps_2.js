/*
Modify the function from the previous exercise so it ignores non-alphabetic characters when 
determining whether it should uppercase or lowercase each letter. The non-alphabetic characters should 
still be included in the return value; they just don't count when toggling the desired case.

Input: string
Output: string

Explicits: if alphabetic character, every other letter should be uppercase, start first letter uppercase
Implicits: numbers/punctuation/spaces do not count

Data Structure: string --> array --> string

Algorithm:
  - Start function with string argument
    - Convert to array of chracters
    - Iterate through the array of characters and create a new array using map method
      - if alphabetical, then alternate uppercase and lowercase
        - first letter should be uppercase - 
        - next character should be different from last alphabetical character
      - else continue
    - Convert array back to a string and return that string
*/

function staggeredCase(string) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let upperCounter = true;
  let characterArray = string.split('');
  let newArray = characterArray.map(character => {
    if (alphabet.includes(character)) {
      if (upperCounter) {
        upperCounter = false;
        return character.toUpperCase();
      } else {
        upperCounter = true;
        return character.toLowerCase();
      }
    } return character;
  });
  return newArray.join('');
}


console.log(staggeredCase("I Love Launch School!")) // "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS")) //"AlL cApS");
console.log(staggeredCase("ignore 77 the 444 numbers")) // "IgNoRe 77 ThE 444 nUmBeRs");