/*
Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

You may assume that every word contains at least one letter, and that the string will always contain at least one word. 
You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.

Input: string
Output: string

Explicits: every word in string reverses first and last letters; word = @least one letter; string = 1+ length; string only words and spaces
Implicits: no punctuations
            one letter returns that letter
            
Data Structure: string --> array ---> string

Algorithm:
- Start function w/string argument
  - Convert string to array or words
    - split method with space separator
    - save to variable wordsArray
- FOR loop  
  - initialization: i = 0
  - stop condition: i < wordsArray.length
  - iteration statement: i += 1
    - iterate through the wordsArray 
    - for every element, switch first and last letter
      - for every word take first letter and save as variable firstLetter
        - let firstLetter = wordsArray[i].slice(0,1)
      - take last letter and save as variable lastLetter
        - let lastLetter = wordsArray[i].slice((wordsArray[i].length - 1))
      - take middle of word and saved to variable middleOfWord
        - let middleOfWord = wordsArray[i].slice(1, wordsArray[i].length - 1)
      - re-assign element to firstLetter + middleOfWord + lastLetter
        - wordsArray[i] = firstLetter + middleOfWord + lastLetter
  - Convert wordsArray to a string
    - use join method
  - Return wordsArray
*/

function swap (string) {
  let wordsArray = string.split(' ');
  for (let i = 0; i < wordsArray.length; i += 1) {
     if (wordsArray[i].length === 1) {
      wordsArray[i] = wordsArray[i];
    } else {
      let firstLetter = wordsArray[i].slice(0,1);
      let lastLetter = wordsArray[i].slice(wordsArray[i].length - 1);
      let middleOfWord = wordsArray[i].slice(1, wordsArray[i].length -1);
      wordsArray[i] = lastLetter + middleOfWord + firstLetter;
  }
}
console.log(wordsArray.join(' '));
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"