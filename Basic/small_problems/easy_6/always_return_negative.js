//Write a function that takes a number as an argument. 
//If the argument is a positive number, return the negative of that number. If the argument is a negative number, return it as-is.

/*Input: number
Output: number, always negative

Explicit rules: return number as negative, if alreadyy negative, return number
Implicit rules: 

Data type: number, string

Algorithm:
- Start function 
  - Convert number to a string
    - if includes "-", then return string as number
    - if not includes "-", insert negative sign to front of string
      - convert to numver
    - return number

*/

function negative (number) {
  let stringNumber = String(number);
  if (stringNumber.includes('-')) {
    return number;
  } else {
    let newNumber = Number('-' + stringNumber);
    return newNumber;
  }
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0

