/*
Write a function that takes two strings as arguments, determines the length of the two strings, 
and then returns the result of concatenating the shorter string, 
the longer string, and the shorter string once again. You may assume that the strings are of different lengths.

Input: 2 strings
Output: 1 string

Explicits:  - output string is shorter string + longer string + shorter string
            - strings are different lengths
Implicits:  - if string is empty string, then return the other string

Data Structure: string --> determine lengths, concatenate --> new string

Algorithm:
  - Start a function with 2 string arguments
    - if string1's length is shorter than string2, return string1 + string2 + string3
    - else if string1's length is longer than string2, return string2+ + string1 + string2

*/

function shortLongShort(string1, string2) {
  if (string1.length < string2.length) {
    return string1 + string2 + string1;
  } else return string2 + string1 + string2;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"