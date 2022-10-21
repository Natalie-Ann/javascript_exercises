// Write a function that takes one argument, a positive integer, and returns the sum of its digits. 
// Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum.

/*
Input: positive number integer
Output: positive number integer, sum of digits of input

Explicits: - output is sum of digits of input
            - use only method calls
Implicits: None

DS: array

Algorithm:
- convert number to string
- split string to an array of digits
- map to numbers
- reduce to sum the numbers
- return the sum

*/

function sum(number) {
    let digitArray = String(number).split('').map(number => Number(number));
    let sum = digitArray.reduce((current, accum) => accum + current, 0);
    console.log(sum);
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45