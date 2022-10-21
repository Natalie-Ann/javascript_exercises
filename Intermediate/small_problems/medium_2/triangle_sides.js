// A triangle is classified as follows:

// Equilateral: All three sides are of equal length.
// Isosceles: Two sides are of equal length, while the third is different.
// Scalene: All three sides are of different lengths.
// To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, 
// and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

// Write a function that takes the lengths of the three sides of a triangle as arguments and returns one of the following 
// four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

/*
Input: 3 numbers
Output: string

Explicits:  - output classifies input values as 4 different options: equilateral, is, scalene, invalid
            - invalid is 2 shortest sides together greater than longest side && every side greater than 0
            - scalene all sides different
            - equilateral all sides same
            - isoceles 2 sides same, 1 different
Implicits:  - can have decimals

DS: 

Algorithm:
    - Check validity
        -  if any side less than zero OR 2 short sides NOT longer than long side
            - order sides from shortest to longest, sum the first 2 numbers and compare to other number
            -  return invalid
    - Check type
        - if all side equal, return equilateral
        - if all sides different return scalene
        - else return isoceles
*/

function triangle(side1, side2, side3) {
    let orderedSides = [side1, side2, side3].sort((a, b) => a - b);
    if ((orderedSides[0] <= 0) || (orderedSides[0] + orderedSides[1] < orderedSides[2])) {
        return 'invalid';
    };
    if ((side1 === side2) && (side2 === side3)) {
        return 'equilateral';
    } else if ((side1 !== side2) && (side2 !== side3)) {
        return 'scalene';
    } else {
        return 'isoceles';
    }
}


console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"