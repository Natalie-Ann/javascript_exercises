// Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. 
// You may assume that the argument will always be an odd integer.

/*
Input: odd number integer
Output: string in shape of diamond made up of * characters

Explicits:  - input always odd integer
            - output always 4 pointed diamond on input X input grid (square input x input)
Implicits:  - integer 1 will return one star
            - 3 will log 3 lines, widest point has 3 stars, surrounding lines have 1 star, spaces before and after
            - 9 will log 9 lines, widest point has 9 stars, surrounding lines have odd number stars, starting with one, 
            spaces are how many from midpoint
                - 9
                    4 star 4
                    3 star star star 3
                     2 star star star star star 2
                    1 star star star star star star star 1
                    0
            - Number of spaces = (input number - number of stars)/2

DS: strings

Algorithm:
    - Build the diamond with number of stars
        - [1, 3, 5, 9] --- odd integers up to input number, create string of stars with odd numbers up to input number (for loop)
        - [5, 3, 1] -- odd integers down from input number, for loop opposite,not including the input number
        - Concatenate the two?
            [1, 3, 5, 9, 5, 3, 1]
    - Add appropriate spaces in front
        - Map new array with padding for each element
            - Pad start with (input number - number of stars)/2
    - Log each element to a new line
        - ForEach?
*/

function diamond(inputNumber) {
    let initialArray = [];
    for (let i = 1; i <= inputNumber; i += 2) {
        initialArray.push('*'.repeat(i));
    }
    for (let i = inputNumber - 2; i >= 1; i -= 2) {
        initialArray.push('*'.repeat(i));
    }
    let paddedArray = initialArray.map(starLine => starLine = starLine.padStart((inputNumber - starLine.length)/2 + (starLine.length)));
    paddedArray.forEach(diamondLine => console.log(diamondLine));
}

diamond(1);
// logs
// *

diamond(3);
// logs
//  *
// ***
//  *


diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *