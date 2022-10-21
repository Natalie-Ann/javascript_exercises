/*
Write a function that returns a list of all palindromic substrings of a string. 
That is, each substring must consist of a sequence of characters that reads the same forward and backward.
The substrings in the returned list should be sorted by their order of appearance in the input string. 
Duplicate substrings should be included multiple times.

You may (and should) use the substrings function you wrote in the previous exercise.

For the purpose of this exercise, you should consider all characters and pay attention to case; that is, 'AbcbA' is a palindrome, 
but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are not palindromes.

Input: string
Output: array

Explicits:  - palindromes are 2+ characters that are equal reversed, case sensitive
            - duplicate substrings included multiple times in output array
            - substrings sorted by order of appearance in the input string
Implicits:  - if no palindromes, return empty array
            - dash character included in palindromes

Data Structure: string --> find substrings that are palindromes --> array

Algorithm:
  - Start function with string parameter
    - Declare a variable initialized to array of substrings
      - Create all substrings of the string using the previous leadingSubstrings and substrings functions
    - Filter the array for greater than 1 chcaracter
    - Filter that array for palindromes, if substring is equal to the reverse of itself
    
*/

function leadingSubstrings(string) {
  let outputArray = [];
  for (let i = 1; i <= string.length; i += 1) {
    outputArray.push(string.slice(0, i));
  }
  return outputArray;
}

function substrings(string) {
  let allSubstringsArray = [];
  for (let i = 0; i <= string.length; i += 1) {
    let leadingArray = leadingSubstrings(string.slice(i));
    allSubstringsArray.push(leadingArray);
  }
  return allSubstringsArray.flat();
}

function palindromes(string) {
  let substringArray = substrings(string);
  return substringArray.filter(element => element.length > 1).filter(substring => substring === substring.split('').reverse().join(''));
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]