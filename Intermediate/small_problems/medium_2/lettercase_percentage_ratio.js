/*
Write a function that takes a string and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.

Input: string
Output: object

Explicits:  - output object has 3 key-value pairs
              - lowercase: percentage of lowercase characters in the input string
              - uppercase: percentage of uppercase characters in the input string
              - neither: percentage of punctuations/spaces/noalphabetic characters
Implicits:  

Data Structure: string --> array of characters, calculations ---> object

Algorithm:
- Start function with string parameter
  - Declare a variable characterArray and initialize to string converted to array of characters
  - Declare a variable outputObject and initialize to {lowercase: 0/string.length, uppercase: 0/string.length, neither: 0/string.length}
  - Iterate through the characterArray
    - if character is alphabetical
      - if lowercase, add to lowercase key
      - if uppercase, add to uppercase key
    - else add to neither
  - Return outputObject
*/

function letterPercentages(string) {
  let stringLength = string.length;
  console.log(stringLength);
  let lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  let upperAlphabet = 'ABCDEFGHIKJKLMNOPQRSTUVWXYZ';
  let characterArray = string.split('');
  let outputObject = {lowercase: 0, uppercase: 0, neither: 0};
  characterArray.forEach(character => {
    if (upperAlphabet.includes(character)) {
      outputObject.uppercase += 1;
    } else if (lowerAlphabet.includes(character)) {
      outputObject.lowercase += 1;
    } else {
      outputObject.neither += 1;
    }
  });
  for (let property in outputObject) {
    outputObject[property] = ((outputObject[property] / string.length) * 100).toFixed(2);
  }
  console.log(outputObject);
}

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }