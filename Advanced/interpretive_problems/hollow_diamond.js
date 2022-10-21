/*
For a hollow diamond:
n x n grid, but number of stars and spaces is different
    - always start and end with one star
    - all lines in between are 2 stars

Algorithm:
    - Build array with number of stars
        - 1, 2, 2, 2, 2, 2, 2, 2, 1
        - Start with array with 2 elements of one star
            - Insert n number of elements with 2 stars
    - Add pad spaces
        - Use padStart method to build new array 
        - padStart(inputNumber - starLength/2) + starLength
    - Add in between spaces
        - if startlength === 2
            - spaces are 1, 3, 5, 7, ---odd numbers, going up and then down
            - for loop build strings with number of space up and then down
            - Insert these spaces to the starArray built previously
    - Log each line with forEach
*/




function diamond(inputNumber) {
    let initialArray = [];
    initialArray.push('*');
    for (let i = 1; i <= inputNumber - 2; i += 1) {
        initialArray.push('**')
    }
    if (inputNumber > 1) {
        initialArray.push('*');
    }
    let paddedArray = initialArray.map(starLine => starLine = starLine.padStart((inputNumber - starLine.length)/2 + (starLine.length)));
    let addedInBetweens = paddedArray.map((starLines, index) => {
        if (index > 0 && index < paddedArray.length) {
            
            
        }
    })
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