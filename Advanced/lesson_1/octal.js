// Write a Function named octalToDecimal that performs octal to decimal conversion. 
// When invoked on a String that contains the representation of an octal number, the Function returns a decimal version of that value as a Number. 
// Implement the conversion yourself: do not use something else to perform the conversion for you.

// 233                          // octal
// = 2*8^2 + 3*8^1 + 3*8^0
// = 2*64  + 3*8   + 3*1
// = 128   + 24    + 3
// = 155                          // decimal

/*
Input: string representing an octal
Output: number representing decimal version

Explicits:  - converting octal number to a decimal number
Implicits:  - from right to left, multiply the number with base 8
                - ones place: 8^0 * digit
                - tens: 8^1 * digit
                - hundreds: 8^2 * digit
            - sum the above to get the decimal
            - if number in octal is zero, then don't add anything in decimal

DS: arrays

Algorithm:
- Split the string into an array and reverse the array '130' --> [1, 3, 0] --> [0, 3, 1]
- Iterate through the array and create a new array
    - (8^index) * digit
- Reduce the digit array
    - Sum
- Return the sum
*/


// function octalToDecimal(numberString) {
//     let reversedArray = numberString.split('').reverse();
//     let inBetween = reversedArray.map((digit, index) => Math.pow(8, index) * digit);
//     let sum = inBetween.reduce((sum, current) => sum + current, 0);
//     console.log(sum);
//   }

function octalToDecimal(numberString) {
    let sum = numberString.split('').reverse().reduce((sum, current, index) => {
        return sum + (Number(current) * Math.pow(8, index));
    }, 0);
    console.log(sum);
}
  
  octalToDecimal('1');           // 1
  octalToDecimal('10');          // 8
  octalToDecimal('130');         // 88
  octalToDecimal('17');          // 15
  octalToDecimal('2047');        // 1063
  octalToDecimal('011');         // 9