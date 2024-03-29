// Write a function that takes a string as an argument and returns an array that contains every word from the string, 
// with each word followed by a space and the word's length. If the argument is an empty string or if no argument is passed, 
// the function should return an empty array.

// You may assume that every pair of words in the string will be separated by a single space.

/*
Input: string
Output: array

Explicits:  - output array has each word followed by a space and the word's length
            - if input is an empty string or no argument, return an empty array
            - words separated by single space
Implicits:  - non-alphas count in words length

DS: string--> array

Algorithm:
- Split string into words
- Map new array 
    - each word + word's length
- Return new array
*/

function wordLengths(string = '') {
    if (string.length === 0) return [];
    let wordArray = string.split(' ');
    let newArray = wordArray.map(word => `${word} ${word.length}`);
    return newArray;
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