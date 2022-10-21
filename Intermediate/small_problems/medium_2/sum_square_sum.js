// Write a function that computes the difference between the square of the sum of the first n positive integers 
// and the sum of the squares of the first n positive integers.

/*
Input: number
Output: number

Explicits:  - output number is  (sum of integers <= input number)**2 - (each integer <= input number squared and then summed)
            - (1 + 2 + 3)**2                   - (1**2 + 2**2 + 3**2)
Implicits:  - if input number is less than 2, then return 0

DS: array of digits

Algorithm:
    - Create an array of intgers up to inputNumber --> assign to variable digitArray
        - Declare empty array variable
        - push integer up to and including inputNumber
    - Reduce digitArray to square of the sum --> assign to variable
    - Reduce digitArray to sum of the squares --> assign to variable
    - Subtract the two above variables to get the difference
*/

function sumSquareDifference(inputNumber) {
    let digitArray = [];
    for (let i = 1; i <= inputNumber; i += 1) {
        digitArray.push(i);
    }
    let squareSum = digitArray.reduce((accum, current) => accum + current, 0)**2;
    let sumSquares = digitArray.reduce((accum, current) => {
        return accum + (current**2);
    }, 0);
    console.log(squareSum - sumSquares);
}

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150