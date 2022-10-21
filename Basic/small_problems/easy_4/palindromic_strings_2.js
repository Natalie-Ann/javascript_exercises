/*
Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. 
This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. 
If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.

Input: string
Output: Boolean

Explicit rules:   - output returns true if input string is a palindrome; palindrome is case-insensitive
                  - palindrome = character left to right = characters right to left
                  - ignore punctuation, spaces
Implicit rules:   

Data Structure: string --> array of characters, make comparisons --> return Boolean

Algorithm:
  - Start function with string argument
    - Declare a variable with alphanumeric characters in an array
    - Filter out non-alphanumeric characters from string
      - Declare a variable stringArray that is the result of converting string to an array, use split, then filtering out non-alphanumerics
    - If reverse of string is the same as the string, return true
*/

function isRealPalindrome(string) {
  let alphanumeric = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let stringArray = string.toLowerCase().split('').filter(character => {
    return alphanumeric.includes(character);
  });
  let stringOnlyAlphaNumerics = stringArray.join('');
  let reversedString = stringArray.slice().reverse().join('');
  console.log(stringOnlyAlphaNumerics === reversedString);
}


isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false
isRealPalindrome('natalie');
