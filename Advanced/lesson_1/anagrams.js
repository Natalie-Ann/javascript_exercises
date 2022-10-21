// Write a Function named anagram that takes two arguments: a word and an array of words. 
// Your function should return an array that contains all the words from the array argument that are anagrams of the word argument. 
// For example, given the word "listen" and an array of candidate words like "enlist", "google", "inlets", and "banana", 
// the program should return an array that contains "enlist" and "inlets".

/*
Input: string representing word, array of many strings (words)
Output: array of strings

Explicits:  - output array contains only the strings that are anagrams of the input string
Implicits:  - anagrams = same letters rearranged
                - same length
                - same letters
            - case doesn't matter
            - empty string?
            - punctuation

DS: arrays

Algorithm:
- Filter inputArray for words that are the same length as the input word, (sameLenghtWords)
- Filter sameLengthWords for words that have the same letters (anagrams)
    - make copy of inputWord
    - Iterate through character in each word of sameLengthWords array (split each word into characters)
        - if inputWord includes the character, splice out that character
    - Retun true if inputCopy is an empty string
- Return anagrams
*/


function anagram(inputWord, list) {
    let sameLengthWords = list.filter(word => word.length === inputWord.length);
    let anagrams = sameLengthWords.filter(word => {
        let inputCopy = inputWord.slice().split('');
        word.split('').forEach(character => {
            if (inputCopy.includes(character)) {
                inputCopy.splice(inputCopy.indexOf(character), 1);
            }
        });
        return inputCopy.length === 0;
    });
    console.log(anagrams);
  }
  
  anagram('listen', ['enlists', 'google', 'inlets', 'banana']);  // [ "inlets" ]
  anagram('listen', ['enlist', 'google', 'inlets', 'banana']);   // [ "enlist", "inlets" ]