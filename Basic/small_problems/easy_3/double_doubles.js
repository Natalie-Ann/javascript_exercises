/*A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. 
For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; 
otherwise, return the double number as-is.

Input: number
Output: number
Explicit rules: 
  - double numbers must be even length
  - left side = right side 
  - if double number, return number
  - if not double number, return number * 2
Implicit rules:
  - inputs all positive integers
  - outputs all positive integers
  
Data Structure: ?

- Start Function that takes number argument
- Check for numbers that are even length
- If not even length, return number * 2
- Else
  - Separate number to two sides
    - make a divider element number.length/2
    - use slice twice to create first half and second half
  - If two sides are equal, then return number
  - Else return number * 2

*/

function twice(number) {
  if (String(number).length % 2 !== 0) {
    console.log(number * 2);
  } else {
    let dividerElement = String(number).length / 2;
    let firstHalf = String(number).slice(0, dividerElement);
    let secondHalf = String(number).slice(dividerElement);
    if (firstHalf === secondHalf) {
      console.log(number);
    } else {
      console.log(number * 2);
    }
  }
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676