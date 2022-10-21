// For this practice problem, we'll represent rectangles as Arrays with two elements: a height and a width.

// Write a Function named totalArea that takes an Array of rectangles as an argument. 
// The Function should return the total area covered by all the rectangles.

/*
Input: array of nested arrays
Output: number representing area 

Explicits:  - 2 numbers in each nested array = height and width
            - output is the total area of all the rectangles (nested arrays)
Implicits:  - area = height * width
            - sum all the areas

DS: arrays

Algorithm:
- Iterate through the input array, map a new array
    - For each nested array, multiply the 2 numbers
- Iterate through the areaArray, reducing to a single value, sum
    - for each rectangleArray, add to the next rectangle
- Return the sum
*/

function totalArea(rectangles) {
    let areaArray = rectangles.map(rectangle => rectangle[0] * rectangle[1]);
    let sum = areaArray.reduce((accum, currentRectangle) => {
        return accum + currentRectangle;
    }, 0);
    console.log(sum);
}

// let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

// totalArea(rectangles);    // 141


// Now, write a second Function named totalSquareArea. This Function should calculate the total area of a set of rectangles, just like totalArea. 
// However, it should only include squares in its calculations: it should ignore rectangles that aren't square.

/*
Algorithm:
- Filter the input rectangles for only square rectangles
- then use the total area function above to get the totalSquareArea


*/

function totalSquareArea(rectangles) {
    let squareRectangles = rectangles.filter(rectangle => rectangle[0] === rectangle[1]);
    let squareArea = totalArea(squareRectangles);
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

totalSquareArea(rectangles);    // 121