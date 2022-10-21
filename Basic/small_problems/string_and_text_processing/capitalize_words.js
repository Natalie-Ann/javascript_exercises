/*
Write a function that takes a string as an argument and returns that string with 
the first character of every word capitalized and all subsequent characters in lowercase.

You may assume that a word is any sequence of non-whitespace characters.

Input: string
Output: string

Explicits:  - output string has first letter of every word capitalized and rest lowercase
            - word is characters without whitespace
Implicits:  - if word starts with non-alphabetic character, then dont capitalize it

Data Structure: string --> array of words --> string

Algorithm:
  - Start a function with string argument
    - Convert string to an array of words
    - Declare variable newArray
      - Iterate through the words array - create a new array (use map method)
        - Transform each element
          - element = element[0] uppercase + element.slice(1)
    - Convert new array back to string and return that

*/

function wordCap (string) {
  return string.split(' ')
                .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
                .join(' ');
}


console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'