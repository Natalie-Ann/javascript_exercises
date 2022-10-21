//Write a function that takes an array of strings and returns an array of the same string values, but with all vowels (a, e, i, o, u) removed.

/*
Input: array of strings
Output: array of strings

Explicits:  - output array has vowels removed from each element
Implicits:  - include uppercase/lowercase vowels
            - if element has all vowels, output will have empty string
            
Data Structure: array --> iterate through the array --> array

Algorithm:
  - Declare a function with an array parameter
    - Declare a variable initialized to a string of vowels upper and lowercase
    - Declare a variable noVowels assigned to new array created when iterating through the input array
      - Create a new array, use map method
        - Check each element for vowels and remove vowels 
          - Iterate through the character of each element (use for loop?)
            - if vowels variable includes the character, replace with empty string
        - Return new element
    - Return noVowels array
*/

function removeVowels(array) {
  let vowels = 'aeiouAEIOU';
  let noVowels = array.map(element => element.replace(/[aeiou]/gi,''));
  console.log(noVowels);
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]