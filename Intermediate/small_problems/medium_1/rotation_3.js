// Take the number 735291 and rotate it by one digit to the left, getting 352917. 
// Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. 
// Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. 
// Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. 
// The resulting number is called the maximum rotation of the original number.

// Write a function that takes an integer as an argument and returns the maximum rotation of that integer. 
// You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

/*
Input: number
Output: number

Explicits:  - output number is max rotation of input number
Implicits:  - if one digit, return same number
            - if leading zero, zero gets dropped

DS: array

Algorithm:
    - Split into array of digits
    - Make copy of digits array
    - Build a new array from the digit array
        - Remove digit with current index and push to end of the accum array
        - Continue doing this until reach end of array
    - Return new array
*/

function maxRotation(number) {
    let digitArray = String(number).split('');
    let newArray = digitArray.reduce((accum, _, index) => {
        let rotatedDigit = accum.splice(index, 1)[0];
        accum.push(rotatedDigit);
        return accum;
    }, digitArray.slice());
    let newNumber = Number(newArray.join(''));
    console.log(newNumber);
}

maxRotation(735291);          // 321579 --- 
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845