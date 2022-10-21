// A triangle is classified as follows:

// Right: One angle is a right angle (exactly 90 degrees).
// Acute: All three angles are less than 90 degrees.
// Obtuse: One angle is greater than 90 degrees.
// To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0. 
// If either of these conditions is not satisfied, the triangle is invalid.

// Write a function that takes the three angles of a triangle as arguments and returns one of the following four strings 
// representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

// You may assume that all angles have integer values, so you do not have to worry about floating point errors. 
// You may also assume that the arguments are in degrees.

/*
Input: 3 numbers
Output: string

Explicits:  - output string is one of 4 options: right, acute, obtuse, or invalid
            - right = one 90 degree input number
            - obtuse = one input number > 90 
            - actute = all numbers < 90
            - invalid = sum of numbers != 180; numbers <= 0
            - all numbers are integers in degrees

DS: numbers and strings

Algorithm:
    - Get sum of numbers
    - Get min number
    - Get max number
    - Determine validity
        - if sum of numbers does not equal 180 or min number <= 0, return invalid
    - Determine type
        - if largest number is less than 90, return acute
            - else if greater than 90, return obtuse
            - else return right
*/

function triangle(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    let min = Math.min(num1, num2, num3);
    let max = Math.max(num1, num2, num3);

    if ((sum !== 180) || (min <= 0)) return 'invalid';

    if (max < 90) {
        return 'acute';
    } else if (max > 90) {
        return 'obtuse';
    } else {
        return 'right';
    }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"