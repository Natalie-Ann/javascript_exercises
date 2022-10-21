// A 3x3 matrix can be represented by an array of arrays: an outer array containing three subarrays that each contain three elements. For example, the 3x3 matrix shown below:

// const matrix = [
//     [1, 5, 8],
//     [4, 7, 2],
//     [3, 9, 6],
//   ];

//   An array of arrays is sometimes called a "nested array" because each inner subarray is nested inside an outer array. It also may be called a "two-dimensional array"

//   To access an element in the matrix, you can use bracket notation twice (such as array[][]), and include both the row index and column index within the brackets. Given the above matrix, matrix[0][2] is 8, and matrix[2][1] is 9. An entire row in the matrix can be referenced using a single index: matrix[1] is the row (subarray) [4, 7, 2]. Furthermore, given a row, we can determine the total number of columns by counting the number of elements in the row. Unfortunately, a convenient notation for accessing an entire column does not exist.

// The transpose of a 3x3 matrix is the matrix that results from exchanging the rows and columns of the original matrix. For example, the transposition of the matrix shown above is:

// 1  4  3
// 5  7  9
// 8  2  6

// Write a function that takes an array of arrays that represents a 3x3 matrix and returns the transpose of the matrix. You should implement the function on your own, without using any external libraries.

// Take care not to modify the original matrix — your function must produce a new matrix and leave the input matrix array unchanged.

/*
Input: array of nested array 3x3
Output: array of nested arrays 3x3

Explicits:  - output array is all the columns from the original matrix
            - each column is an inner array
            - do not mutate original array
Implicits:  - each inner array in output array is all the 0 indexes from first array, all the 1 indexes...

DS: arrays

Algorithm:
- Make copy of inputArray
- Iterate through the copy, mapping a transposedArray
    - for each inner array
        - iterate through the copyArray and slice the currentIndex element 
            - return that array
- Return the transposed array
*/

// function transpose(matrix) {
//     let copyArray = matrix.slice();
//     let transposedArray = copyArray.reduce((accum, innerArray, index) => {
//         let newArray = [];
//         copyArray.forEach(innerArray => newArray.push(innerArray[index]))
//         accum.push(newArray);
//         return accum;
//     }, []);
//     return transposedArray;
// }

// function transpose(matrix) {
//     let copyArray = matrix.slice();
//     let transposedArray = copyArray.map((innerArray, index) => {
//         let newArray = [];
//         copyArray.forEach(innerArray => newArray.push(innerArray[index]));
//         return newArray;
//     });
//     return transposedArray;
// }

function transpose(matrix) {
    let copyArray = matrix.slice();
    let transposedArray = copyArray.reduce((accum, currentInnerArray, index) => {
        let newInnerArray = copyArray.reduce((accum, currentInnerArray) => {
            accum.push(currentInnerArray[index]);
            return accum;
        }, []);
        accum.push(newInnerArray);
        return accum;
    }, []);
    return transposedArray;
}

const matrix = [
    [1, 5, 8],
    [4, 7, 2],
    [3, 9, 6]
  ];
  
  const newMatrix = transpose(matrix);
  
  console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
  console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]