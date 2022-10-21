// Write a function that generates and returns an acronym from a string of words. For example, the function should return "PNG" for the string "Portable Network Graphics". Count compound words (words connected with a dash) as separate words.

/*
Input: string
Output: string

Explicits:  - output string is an acronym...first letter of every word capitalized
            - if word contains dash, words connected with the dash are separate words
Implicits:  - ignore punctuation

Questions/Test cases: - empty string input? numbers?

DS: arrays, strings w/regex

Algorithm:
- Split string into words separated by spaces or dash characters
- Filter out any non-alpha characters
- Create acronym string from wordArray, reduce method
    - for each word, extract the first letter
    - add that letter to acronym accumulator
- Return the acronym 
*/


// function acronym(string) {
//     let words = string.split(/[ \-]/).join(' ').replace(/[^ a-zA-z]/g, '');
//     console.log(words);
//     let anagram = words.split(' ').reduce((accum, currentWord) => accum + currentWord[0].toUpperCase(), '');
//     console.log(anagram);
//   }

// function acronym(string) {
//     let acronym = string.split(/[ \-]/g).reduce((accum, currentWord) => accum += currentWord[0].toUpperCase(), '');
//     console.log(acronym);
// }

function acronym(string) {
    console.log(string.replace('-', ' ').split(' ').map(word => word[0].toUpperCase()).join(''));
}
  
  acronym('Portable Network Graphics');                  // "PNG"
  acronym('First In, First Out');                        // "FIFO"
  acronym('PHP: HyperText Preprocessor');                // "PHP"
  acronym('Complementary metal-oxide semiconductor');    // "CMOS"
  acronym('Hyper-text Markup Language');                 // "HTML"
  acronym('extra--dashes');