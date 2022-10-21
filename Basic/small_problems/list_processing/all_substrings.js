/*
Write a function that returns a list of all substrings of a string. 
Order the returned list by where in the string the substring begins. 
This means that all substrings that start at index position 0 should come first, then all substrings that start at index position 1, 
and so on. Since multiple substrings will occur at each position, return the substrings at a given index from shortest to longest.

You may (and should) use the leadingSubstrings function you wrote in the previous exercise:

Input: string
Output: array

Explicits:  - output array is array with all substrings of a string
            - order of substrings based on index and shortest to longers
Implicits:  - last element should be last character by itself, first element should be first character by itself

Data Structure: string ---> create leading substrings with each index as lead, combine arrays --> output array

Algorithm:
  - Start function with string argument
    - Declare a variable outputArray initialized to empty array
    - iterate through the characters of the string
      - for each character, call leadingsubstrings
      - push the result to outputArray and then flatten
  - Return outputArray
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
  console.log(allSubstringsArray.flat());
}
substrings('abcde');

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]