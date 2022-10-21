/*

Given an array of numbers, of any length, create a function which counts how many of those numbers pass the following criterea:

The first and last digits of a number must add to 10.
Examples

endsAddTo10([19, 46, 2098]) ➞ 3

endsAddTo10([33, 44, -55]) ➞ 1

endsAddTo10([]) ➞ 0
Notes

All items in the array will be numbers.
Ignore negative signs (see example #2).
If the number contains only one digit, that digit will be the first and the last digit.
If given an empty array, return 0.

Input: array of numbers
Output: number

Explicits:   - output number is the count of however many numbers pass the tests
                - first digit + last digit = 10
                - if the number is 1 digit long, check digit + digit
                - ignore negative signs
              - all elements in the input array will be numbers --> integers
              - empty input arrays return 0
Implicits:   - different data type? can be any input data type, check first if it's an               array


DS: array

Algorithm:
  - Check if the input is an array, if not an array return -1 -- Array.isArray(value)
  - Iterate through the input Array
    - For each number,convert the numbers to strings (map) and took out negatives
      - Create a doubleNumbers array that doubledNumbers based on length of the string version of the numbers
      - Check length: if the number as a string is < 2 length, then double the number
      - else 
        - extract the first digit and the second digit
      - If those digits summed = 10
    - Filter the doubleNumbers array for elements that equal 10 and return the length
*/


function endsAddTo10(inputArray) {
    if (!Array.isArray(inputArray)) {
      return -1;
    } else {
      
      let stringArray = inputArray.map(number => {
        number = String(number);
        let noNegative = number.replace('-', '');
        return noNegative;
      });
      
      let doubleNumbers = stringArray.map(number => {
        if (number.length < 2) {
          return number * 2;
        } else {
          let firstNumber = Number(number[0]);
          let secondNumber = Number(number[number.length - 1]);
          
          return firstNumber + secondNumber;
        }  
        
      });
      
      let count = doubleNumbers.filter(element => element === 10).length;
      
      return count;
    }
  }
  
  
  console.log(endsAddTo10('2, 3, 4')); // -1 
  
  console.log(endsAddTo10([19, 46, 2098])); // 3
  
  console.log(endsAddTo10([33, 44, -55])) // 1
  
  console.log(endsAddTo10([2, 4, 6])); //  0
  
  console.log(endsAddTo10([])) // 0