// This challenge concerns square matrices (same number of rows and columns) as the below example illustrates:

// The entries in the diagonal line from the top left to the bottom right form the main diagonal of the matrix. In this case, 1,5,9 form the main diagonal.

// Write a function that returns the matrix obtained by replacing the entries above the main diagonal with 0s.

// For example, for the matrix above you should return:

/*
Input: array of nested arrays
Output: array of nested arrays

Explicits:   - Return an array that changes the elements over the diagnoal             line to 0s
            - Diagnoal line is from top left to bottom right of the matrix
Implicits:   - one subarray returns the array
              - for every subarray count up from the index to get the                       diagnoal digits
              - if you have a diagnoal that is n long

DS: arrays

Algorithm:
- Iterate through the array of arrays, creating a new array
  - for each subarray, starting from the last array, map a new array
      -  , 
      
      push into the intial value array, the mapped new arrays
        - if index is length - 1, return that same array
        - else 
          - each mapped new array, splice (length -1, number of 0s, 0)
          
      initial value []
*/

// let a = [1, 2, 3];
// let result = a.reduceRight((accum, currentElement, index) => {
//   accum.push(currentElement, index);
//   return accum;
// }, []);
// console.log(result);


// function lowerTriang(matrix) {
//     let result = matrix.reduceRight((accum, currentArray, index) => {
//       if (index === currentArray.length - 1) {
//         accum.push(currentArray);
//       } else {
//         let zeroArray = currentArray.splice(index + 1).fill(0);
//         let newArray = currentArray.concat(zeroArray);
//         accum.push(newArray);
//       }
//       return accum;
//     }, []).reverse();
//     console.log(result);
//   }


  function lowerTriang(matrix) {
    let result = matrix.reduceRight((accum, currentArray, index) => {
      if (index === currentArray.length - 1) {
        accum.push(currentArray);
      } else {
        let howManyZeros = currentArray.slice(index + 1).length;
        let zeroArray = currentArray.splice(index + 1, howManyZeros, );
        let newArray = currentArray.concat(zeroArray);
        accum.push(newArray);
      }
      return accum;
    }, []).reverse();
    console.log(result);
  }

// function lowerTriang(matrix) {
//     let result = matrix.reduce((accum, currentSubArray, index) => {
//         if (index === matrix.length - 1) {
//             accum.push(currentSubArray);
//         } else {
//             let zerosArray = currentSubArray.splice(index + 1).fill(0);
//             let newArray = currentSubArray.concat(zerosArray);
//             accum.push(newArray);
//         }
//         return accum;
//     }, []);
//     console.log(result);
// }
  

// function lowerTriang(matrix) {
//     let newMatrix = matrix.map((subArray, index, array) => {
//         if (index === array.length - 1) {
//             return subArray;
//         } else {
//             console.log(index);   
//         }
//     });
//     console.log(newMatrix);
// }

  
  // [
  //   [1, 2, 0],  
  //   [4, 0  0],
  //   [7, 8, 9]
  // ]
  
  // [
  //   [1, 2, 3],
  //   [4, 5, 6],
  //   [7, 8, 9]
  // ]
  
  lowerTriang([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]);
  
  // ➞ [
  //   [1, 0, 0],
  //   [4, 5, 0],
  //   [7, 8, 9]
  // ]
  // // 
  
  lowerTriang([
    [5, 7],
    [7, 9]
  ]);
  
  // ➞ [
  //   [5, 0],
  //   [7, 9]
  // ]
  
  lowerTriang([
    [1, 8, 8, 1],
    [2, 7, 7, 2],
    [3, 6, 6, 3],
    [4, 5, 5, 4]
  ]);
  
  // ➞ [
  // //   [1, 0, 0, 0], //array[0], subArray[1]
  // //   [2, 7, 0, 0], // array[1], subArray[2]
  // //   [3, 6, 6, 0],  // array[2], subArray[3]
  // //   [4, 5, 5, 4]
  // // ]