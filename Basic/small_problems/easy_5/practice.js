//1
// Create a `greatestProduct` function that finds the greatest product
//of five consecutive digits in a given string of digits.

// For example:

/*Input: string
Output: number

Explicits:  - output number is the greatest product of 5 consecutive digits in the string
            - product is multiplying together
            - input string always has more than 5 digits
Implicits:  - if consecutive 5 digit groups have 0, returns 0

Data Structure: string --> array of 5 digits groups --> number

Algorithm:
- Start function with string argument
  - Convert string to an array of 5 digits groupings
  - Reduce each grouping to the product of all the digits together
  - Sort the groupings
  - Return the first element

*/

//function greatestProduct(string) {
 // let arrayOfGroups = [];
 // string.split('').
//}
//}

// greatestProduct("123834539327238239583") // should return 3240
// The input string always has more than five digits.

//console.log(greatestProduct("123834539327238239583")); // 3240
//console.log(greatestProduct("92494737828244222221111111532909999")); // 5292
//console.log(greatestProduct("92494737828244222221111111532909999")); // 5292
//console.log(greatestProduct("92494737828244222221111111532909999")); // 5292
//console.log(greatestProduct("02494037820244202221011110532909999")); // 0


//2
// Given a string split it into as few strings as possible such
// that each substring is a palindrome.

/*
Input: string
Output: array

Explicits: - output array includes palindrome substrings of input string
          - output array should have least amount of elements possible (longest palindromes)
Implicits:  - if no palindromes found, return array with each element one character
            - first test if entire string is a palindrome

Data Structure: string --> array

Algorithm:
- if string.reverse === string, return [...string]


*/

function splitIntoPalindromes(string) {
  if (string.split('').reverse().join('') === string.split('').join('')) return string.split();
}


//splitIntoPalindromes("racecarannakayak"); // ["racecar", "anna", "kayak"];
//splitIntoPalindromes("abc"); // ["a", "b", "c"]
console.log(splitIntoPalindromes("yobananaboy")); // ["yobananaboy"]

//3
//Write a function that removes every other element from an array

//removes element at index 1, 3, 

function removeEveryOther(array) {
  let newArray = array.filter((element, index) => index % 2 === 0);
  return newArray;
}

console.log(removeEveryOther([1, 2, 3, 4, 5, 6])); // [1, 3, 5]
console.log(removeEveryOther([1, 2, 3, 4, 5])); // [1, 3, 5]
console.log(removeEveryOther([])); // []
console.log(removeEveryOther([1])); // [1]
console.log(removeEveryOther([1, 2])); // [1]