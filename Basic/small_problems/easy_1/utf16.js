/*
Write a function that determines and returns the UTF-16 string value of a string passed in as an argument. 
The UTF-16 string value is the sum of the UTF-16 values of every character in the string. 
(You may use String.prototype.charCodeAt() to determine the UTF-16 value of a character.)

Input: string
Output: number

Explicits:  - output number is the SUM of the UTF-16 values of each character in the string
Implicits:  - empty string return zero

Data Structure: string --> iterate and sum values --> number

Algorithm:
- Start a function with a string argument
  - Declare a variable sum and initialize to 0
  - Iterate through the characters in the string using a for loop
    - Declare a variable utf16value and set equal to string.charcodeAt(i)
    - Add utf16value to the sum for every iteration
- Return sum
*/

function utf16Value(string) {
  let sum = 0;
  for (let i = 0; i < string.length; i += 1) {
    let value = string.charCodeAt(i);
    sum = sum + value;
  }
  console.log(sum);
}

utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA);                  // 937
utf16Value(OMEGA + OMEGA + OMEGA);  // 2811