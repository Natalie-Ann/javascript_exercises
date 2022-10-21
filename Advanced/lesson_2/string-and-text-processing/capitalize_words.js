// Write a function that takes a string as an argument and returns that string with the first character of every word capitalized 
// and all subsequent characters in lowercase.

// You may assume that a word is any sequence of non-whitespace characters.

/*
Input: string
Output: string

Explicits:  - output string has first character of every word capitalized, subsequent chars lowercase
            - words separated by whitespace characters
Implicits:  - punctuation counts as a capitalized character

DS: arrays

Algorithm:
- Split string into array of words
- Map new array with each word capitalized + rest of word lowercase
- Join the new array and return the string
*/

// function wordCap(string) {
//     let wordArray = string.split(' ');
//     let newString = wordArray.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');
//     console.log(newString);
// }

/*
Regex Algorithm
- match non whitespace characters (words)
- map a new array and then join
*/


function wordCap(string) {
    let wordArray = string.match(/\S+/gi).map(word => word[0].toUpperCase() + word.slice(1));
    console.log(wordArray.join(' '))
}


wordCap(' four score  and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'