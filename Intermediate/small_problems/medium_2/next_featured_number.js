/*
A featured number (something unique to this exercise) is an odd number that is a multiple of 7, 
with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 
97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next featured number greater than the integer.
Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.

Input: number
Output: number (which is the next featured number greater than input)

Explicits:  - featured number is odd
            - featured number is multiple of 7 (divides by 7 evenly)
            - featured number has all digits only ocurring once (no duplicate digits)
            - largest featured number is 9876543201; all featured numbers less than or equal
            - output number is next featured number starting with input number
Implicits:  - no decimals

Data Structure: loop?

Algorithm:
- Start function with number parameter
  - Start a loop that starts at number, counts upwards, with boundary of <= highest number, count up by 1
    - if iterator number is odd (% 2 === 1) && (%7 === 0)
      - check if digits are different, if yes, return the iterator
    - else continue

*/

// [1, 0, 0, 1]

/*function featured(number) {
  for (let i = number + 1; i <= 9876543201; i += 1) {
    if (i % 2 === 1 && i % 7 === 0) {
      let digits = String(i).split('');
      let repeatedDigits = digits.filter(digit => digits.indexOf(digit) !== digits.lastIndexOf(digit));
      if (repeatedDigits.length === 0) return Number(digits.join(''));
    }
  } 
  return "There is no possible number that fulfills those requirements.";
}

*/


function toOddMultipleOf7(number) {
  do {
    number += 1;
  } while (number % 2 === 0 || number % 7 !== 0);

  return number;
}

console.log(toOddMultipleOf7(14))

// console.log(featured(12));           // 21
// console.log(featured(20));           // 21
// console.log(featured(21));           // 35
// console.log(featured(997));          // 1029
// console.log(featured(1029));         // 1043
// console.log(featured(999999));       // 1023547
// console.log(featured(999999987));    // 1023456987
// console.log(featured(9876543186));   // 9876543201
// console.log(featured(9876543200));   // 9876543201
// console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."