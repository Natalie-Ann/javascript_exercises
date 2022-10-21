/*Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. 
A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.

Input: string
Output: boolean
Explicit rules: palindrome = same forwards and backwards; case sensitive; all characters matter
Implicit rules: 

Data structure: array

- Create function isPalindrome w/string argument
  - Convert string into an array assigned to variable stringArray, use split method
  - Create a copy of the stringArray that is the reverse using reverse method assigned to variable reversedArray
  - If stringArray === reversedArray, then return true; else return false

*/

function isPalindrome(string) {
  let reversedString = string.split('').reverse().join('');
  return (reversedString === string);
}



console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true