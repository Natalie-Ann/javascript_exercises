/*
Write a function that takes a string consisting of zero or more space separated words and returns an object 
that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.

Input: string
Output: object

Explicits:  - output object consists of count of word lengths
            - keys are word lengths
            - values are count of words with that word length
Implicits:  - punctuation counts in a word's length
            - empty string returns empty object

Examples/test cases: ?

Data Structure: string --> array --> object

Algorithm:
  - Start function with string argument
    - if string length is 0, return an empty object
    - Convert string into an array of words, called wordsArray
    - Declare variable outputObject initialized to an empty object
    - Iterate over the wordsArray 
      - if outputObject contains wordsArray length key, then add 1
      - else make that word length a new key and set equal to 1
    - Return outputObject
*/
function wordSizes (string) {
  if (string.length === 0) return {};
  let wordsArray = string.split(' ');
  let outputObject = {};
  wordsArray.forEach(word => {
    if (outputObject[word.length]) {
      outputObject[word.length] += 1;
    } else {
      outputObject[word.length] = 1;
    }
  })
  return outputObject;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));  

// {}