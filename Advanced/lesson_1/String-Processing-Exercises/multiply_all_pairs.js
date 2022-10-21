// Write a function that takes two array arguments, each containing a list of numbers, 
// and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. 
// The returned array should be sorted in ascending numerical order.

// You may assume that neither argument will be an empty array.

/*
Input: 2 arrays, neither empty
Output: 1 array with all product combinations

Explicits:  - output array sorted by ascending numerical order
Implicits:  - None

DS: arrays

Algorithm:
- Loop through the first array
    - for each element in first array, create an array of numbers with that element muliplied by the numbers in the second array
- Merge the arrays created (flat?)
- Sort the arrays based on numerical order
*/

function multiplyAllPairs(array1, array2) {
    let arrayOfArrays = array1.map(firstNumber => {
        return array2.map(secondNumber => firstNumber * secondNumber);
    });

    let outputArray = arrayOfArrays.flat().sort((a, b) => a - b);

    return outputArray;
}



multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]
multiplyAllPairs([2], [4]);
multiplyAllPairs([5, 6, 7, 2, 1], [2, 3]);