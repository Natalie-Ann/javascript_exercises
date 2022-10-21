// Write a program that cleans up user-entered phone numbers so that they can be sent as SMS messages. 
// Other than digits, the number may also contain special character such as spaces, dash, dot, and parentheses that should be ignored.

// The rules are as follows:

// If the phone number is less than 10 digits, assume that it is a bad number.
// If the phone number is 10 digits, assume that it is good.
// If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
// If the phone number is 11 digits and the first number is not 1, then it is a bad number.
// If the phone number is more than 11 digits, assume that it is a bad number.
// For bad numbers, just a return a string of 10 0s.

/*
Input: string of digits and special characters
Output: string representing phone number

Explicits:  - input string can contain spaces, dash, dots and parentheses --- ignore these
            - if digits in input string < 10, return a string of 10 0s (bad number)
            - if digits > 10, assume good number
            - if digits === 11 && first digit is 1, remove the 1 and use last 10 digits
            - if digits > 11, return string of 10 0s
Implicits:  - empty string is a bad number
            - what to do with "ignored" characters? --- from video, remove them from output
            - what if input contains non-ignored characters - ?,[] --- from video, remove them

DS: string --> array --> string

Algorithm:
- Cleanse input
    - filter out the non-digit characters
    - if digits length === 11 and first number is 1, remove the first 1
- Validate the data
    - if digits length != 10 return 10 0s
- Return the string
*/

function getPhoneNumber(inputString) {
    let cleansedString = inputString.split('').filter(character => ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(character));
    if ((cleansedString.length === 11) && (cleansedString[0] === '1')) {
        cleansedString.splice(0, 1);
    }
    if (cleansedString.length === 10) {
        return cleansedString.join('');
    } else {
        return '0000000000';
    }
}

console.log(getPhoneNumber('1234567899')); // '1234567899'
console.log(getPhoneNumber('12345')); // '0000000000' input was < 10
console.log(getPhoneNumber('12345678912345567')); // '0000000000'  input was > 11
console.log(getPhoneNumber('11234567899')); // '1234567899'  input length was 11 and first number was 1, trim first 1
console.log(getPhoneNumber('(123) 456-7899..')); // '1234567899' remove spaces, dash parentheses dots
console.log(getPhoneNumber('')); // '0000000000' empty string return 10 0s
