/*Write a function that takes two strings as arguments, determines the length of the two strings, 
and then returns the result of concatenating the shorter string, 
the longer string, and the shorter string once again. You may assume that the strings are of different lengths.*/

/* 
- Determine the longest string and save to variable longString, other becomes shortString
- use string.concat method to add short string to longstring and save to longer string
- use string.concat method to add longerstring to shorter string and save to finalString
- console.log finalString
*/


function shortLongShort(string1, string2) {
  if(string1.length > string2.length) {
    return string2 + string1 + string2;
  } else if (string1.length < string2.length) {
    return string1 + string2 + string1;
  }
}


shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"