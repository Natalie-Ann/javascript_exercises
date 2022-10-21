/*
Write a function that takes a string as an argument and 
returns an array that contains every word from the string, with each word followed by a space and the word's length. 
If the argument is an empty string or if no argument is passed, the function should return an empty array.

You may assume that every pair of words in the string will be separated by a single space.

Input: string
Output: array

Explicits:  - output array elements = words from string space length
            - if input string is empty string/undefined, return empty array
            - words separated by one space
Implicits:  - empty string returns empty array
            - no argument returns empty array
            - punctuation count in length

Data Structure: string --> array of words --> array

Algorithm:
- Start function with string parameter
  - Convert string to an array of words
  - Iterate through the array of words
    - reassign element to element + element.length
  - Return the array of words
*/

function wordLengths(string = '') {
  if (string === '') return [];
  return string.split(' ')
               .map(element => `${element} ${element.length}`);
}

console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []