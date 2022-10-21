/*Modify the wordSizes function from the previous exercise to exclude non-letters 
when determining word size. For instance, the word size of "it's" is 3, not 4.

Input: String
Output: object

Explicits:  - return object has length of words; key = lengths, values = count
            - punctuation/non-letters do not count in size
Implicits: 

Data Structure: string --> array --> object
Need to compare to alphabet

Algorithm:
  - Start function with string argument
    - guard clause if string is 0 lenght, then return empty object
    - declare variable outputObject and initialize to empty object
    - declare variable alphabet and initialize to alphabet upper and lower case and space
    - Convert string to an array of characters, named charactersArray
      - Iterate over array
      - if charactersArray includes alphabet/space character continue to next element
      - else replace that element with empty string
    - Convert charactersArray back to a string and then back to an array separated now by space characters, save to wordsArray
    - Iterate over wordsArray
      - Same as before

*/

function wordSizes (string) {
  if (string.length === 0) return {};
  let outputObject = {};
  let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ';
  let charactersArray = string.split('');
  
  for (let i = 0; i < charactersArray.length; i += 1) {
    if (alphabet.includes(charactersArray[i])) continue;
    else charactersArray.splice(i, 1);
  }
  let wordsArray = charactersArray.join('').split(' ');
  
  wordsArray.forEach(word => {
    if (outputObject[word.length]) {
      outputObject[word.length] += 1;
    } else {
      outputObject[word.length] = 1;
    }
  });
  return outputObject;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}