// Write a program that cleans up user-entered phone numbers so that they can be sent as SMS messages. Other than digits, the number may also contain special character such as spaces, dash, dot, and parentheses that should be ignored.

// The rules are as follows:

// If the phone number is less than 10 digits, assume that it is a bad number.
// If the phone number is 10 digits, assume that it is good.
// If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
// If the phone number is 11 digits and the first number is not 1, then it is a bad number.
// If the phone number is more than 11 digits, assume that it is a bad number.
// For bad numbers, just a return a string of 10 0s.

/*
Input: string
Output: string

Explicits:  - output string contains a "cleaned up version" of the input string
            - Input strings are checked whether they are "bad" numbers or "good" numbers
                - bad = less than 10 digits, 11 digits if the first number is NOT a 1; > 11 digits
                - good = 10 digits; 11 digits if first number is 1, if so, trim the 1
            - Bad numbers return a string of 10 0's
            - special characters are ignored: spaces, dash, dot, parentheses
Implicits:  - Should the output contain the special characters? Or are those removed?
            - empty string returns 10 0's?
            - other data types as input?

DS: array

Algorithm:
- Remove any non-digits from the input string --> inputString.match(/[0-9/g)
- Determine if number is valid
    - return true if numberArray is 10 digits OR 11 digits and the first number is 1 --> 
    - else return false
        - If number is not valid (returning false, then return 10 0s)
- If the number is valid, clean up the number
    - if number is 10 digits, return that
    - if number is 11 digits, remove the first digit and return the new string
*/

function cleanUpNumber(inputString) {
    if (typeof inputString !== 'string') return '0000000000';
    let digitArray = inputString.match(/[0-9]/g) || [];
    if (isValidNumber(digitArray)) {
        if (digitArray.length === 10) {
            return digitArray.join('');
        } else {
            digitArray.splice(0, 1);
            return digitArray.join('');
        }
    } else {
        return '0000000000';
        }
}



function isValidNumber(digitArray) {
    if (digitArray.length === 11) {
        return digitArray[0] === '1';
    } else {
        return (digitArray.length === 10);
    }
}

// console.log(isValidNumber(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'])); //true
// console.log(isValidNumber([ '0','1', '2', '3', '4', '5', '6', '7', '8', '9', '10'])) //false
// console.log(isValidNumber([ '1','1', '2', '3', '4', '5', '6', '7', '8', '9', '10'])) //true



console.log(cleanUpNumber('8008675309')) // '8008675309'  if 10 digits
console.log(cleanUpNumber('18008675309')) // '8008675309' if 11 digits and first number is 1
console.log(cleanUpNumber('1-800-867-5309')) // '8008675309', good number with special characters removed?
console.log(cleanUpNumber(['18008675309'])) // '0000000000' with other data types --> 10 0s
console.log(cleanUpNumber(''))   // '0000000000' empty string/digit count < 10