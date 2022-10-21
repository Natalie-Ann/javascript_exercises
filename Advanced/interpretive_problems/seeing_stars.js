// Write a function that displays an 8-pointed star in an nxn grid, where n is an odd integer that is supplied as an argument to the function. The smallest such star you need to handle is a 7x7 grid (i.e., when n is 7).

/*
Input: number
Output: strings in star shape

Explicits:  - output star is inputNumber lines long and inputNumber spaces wide (n x n grid)
            - input number is always an odd integer
Implicits:  - 3 stars on every line except for middle line which has n stars
            - spaces between stars decrease as get closer to the middle line
                - lines next to middle line have no spaces between stars...0
                - spaces between the stars increase by 1 after that
                - 2, 1, 0, 0, 0, 1, 2   (7 lines)
                - 3, 2, 1, 0, 0, 0, 1, 2, 3  (9 lines)
            - padding increases as get closer to the middle line
                - first line has 0 padding spaces
                - increases by 1 until gets to middle line
                - counts back down
                - 0, 1, 2, 0, 2, 1, 0
                - 

DS: arrays

Algorithm:
- Find the middle line of the star
    - Math.floor (inputNumber / 2) assign to middleIndex
- Create array with number of stars
    - new Array (inputNumber) fill with *** 
    - splice the middle element and replace with inputNumber of stars
- Add spaces between the stars
    - Iterate through the starsArray
        - map new array with spaces added
            - middleIndex + 1 && middleIndex -1 = no spaces between stars
            - if index is less than middle index
                - count down from (middleIndex - 1)
            - if index is greater than middle index
                - count up 
- Add padding in front of the stars
    - if middleIndex, firstIndex, or lastIndex no padding added
    - else if index less than middle index count up
    - else count down
- Log each element of the array
*/

function star(inputNumber) {
    let middleIndex = Math.floor(inputNumber/2);
    let starArray = new Array(inputNumber).fill('***');
    starArray.splice(middleIndex, 1, '*'.repeat(inputNumber));
    let starArrayWithSpaces = starArray.map((line, index) => {
        if ( (index === middleIndex + 1) || (index === middleIndex - 1) || index === middleIndex ) {
            return line;
        } else if (index < middleIndex) {
            let numberOfSpaces = middleIndex - 1 - index;
            return line.split('').join(' '.repeat(numberOfSpaces));
        } else {
            let numberOfSpaces = index - (middleIndex + 1);
            return line.split('').join(' '.repeat(numberOfSpaces));
        }
            });
    let starsWithPadding = starArrayWithSpaces.map((line, index, array) => {
        if (index === 0 || index === array.length - 1 || index === middleIndex) {
            return line;
        } else if (index < middleIndex) {
            let numberOfSpaces = index;
            return line.padStart(numberOfSpaces + line.length, ' ');
        } else {
            let numberOfSpaces = array.slice().reverse().indexOf(line); 
            return line.padStart(numberOfSpaces + line.length, ' ');
        }
    })
    starsWithPadding.forEach(line => console.log(line));
}

// star(7);
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *


star(9);
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *