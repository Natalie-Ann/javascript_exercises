// The Luhn formula is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers and Canadian Social Insurance Numbers.

// The formula verifies a number against its included check digit, which is usually appended to a partial number to generate the full number. This number must pass the following test:

// Counting from the rightmost digit and moving left, double the value of every second digit
// For any digit that thus become 10 or more, subtract 9 from the result
// 1111 becomes 2121
// 8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
// Add all these digits together
// 1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
// 8763 becomes 7733, and 7 + 7 + 3 + 3 is 20
// If the total (the checksum) ends in 0 (put another way, if the total modulo 10 is congruent to 0), then the number is valid according to the Luhn Formula; else it is not valid. Thus, 1111 is not valid (as shown above, it comes out to 6), while 8763 is valid (as shown above, it comes out to 20).

// Write a program that, given a number in string format, check if it is valid per the Luhn formula. This should treat, for example, "2323 2005 7766 3554" as valid. You can ignore all non-numeric characters in the input string.

//2323 2005 7766 3554 --> 4343 4005 5736 6514 --> 60 --> valid

/*
Input: string
Output: boolean? 

Explicits:  - output checks whether number is valid
            - digits in input string are processed using Luhn formula
                - every 2nd number from right to left is doubled, if the number is > 10, then subtract 9; otherwise return the same number
                - from the new numbers, add them together
                - if sum number ends with 0, then it's valid
            - non-digits are ignored
Implicits:  - any other data type as input?
            - what does it do with an empty string?
            - does the length of the input string matter?

DS: strings --> arrays

Algorithm:
- Remove any non-alpha characters from the string, use match --> digitArray
- Reverse the digitArray
- Iterate through digitArray, creating intermediateNumber using map
    - Convert all the digits to Numbers
    - For every 2nd number (index 1, 3, 5, 9...odd indexes)
        - double the number
            - if the number is > 10, subtract 9 
    - Return the number
- Sum all the numbers in intermediateNumber (reduce method)
- Return true if last digit is 0
*/

function luhnvalidate(inputString) {
    let digitArray = inputString.match(/\d/g).reverse();
    let intermediateNumber = digitArray.map((digit, index) => {
        digit = Number(digit);
        if (index % 2 === 1) {
            digit = digit * 2;
            if (digit >= 10) {
                digit = digit - 9;
            }
        } 
        return digit;
    });
    console.log(intermediateNumber);
    let sum = String(intermediateNumber.reduce((accum, currentNumber) => accum + currentNumber));
    return (sum[sum.length - 1] === '0');
}

// console.log(luhnvalidate('1111')) // 2121 --> 6 --> false
// console.log(luhnvalidate('8763')) //7733 --> 20 --> true
// console.log(luhnvalidate('1a3d5ff..,;[]f6gregfd9')); // [1, 3, 5, 6, 9] --> 16539 --> 24 --> false
console.log(luhnvalidate('2323 2005 7766 3554')); // true