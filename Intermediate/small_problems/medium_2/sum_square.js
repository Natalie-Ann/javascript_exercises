/*
Write a function that computes the difference between the square of the sum of 
the first count positive integers and the sum of the squares of the first count positive integers.

Input: number
Output: number

Explicits:  - first number = sum of all positive numbers below and including input number squared
            - second number = each positive numbers below and including input number square and then summed
            - output number is difference between first number and second number
Implicits:  - if input is 1, then output is 0

Data Structure: number --> array of numbers before, make calculations --> number

Algorithm:
- Start a function with a number parameter
  - Create an array of numbers below and including input number using a for loop
  - Declare variable firstNumber and initialize to:
    - array numbers reduced by adding together
    - then square
  - Declare variable secondNumber and initialize to:
    - array numbers reduced by squaring and then adding
    - then square
  - Subtract and return firstNumber from secondNumer
          

//2025- (1**2 = 1, 2**2 = 4, 3**2 = 9, 4**2 = 16, 5**2 = 25, 6**2 = 36, 7**2 = 49, 8**2 = 64, 9**2 = 81, 10**2 = 100)
(1+2+3+4+5+6+7+8+9+10)**2 = 3025 - 385 = 2640
*/

function sumSquareDifference (number) {
  let arrayOfNumbers = [];
  for (let i = 1; i <= number; i += 1) {
    arrayOfNumbers.push(i);
  }
  let firstNumber = (arrayOfNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0))**2;
  let secondNumber = arrayOfNumbers.reduce((accumulator, currentValue) => accumulator + (currentValue**2), 0);
  console.log(firstNumber - secondNumber);
}

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150