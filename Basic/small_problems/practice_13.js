//Given the following data structure, sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

/*
let oddArray = arr.map(subarray => {
    return subarray.filter(value => value % 2 === 1);
    });

let sumOdds = oddArray.map(subarray => {
  return subarray.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
});
*/


arr.sort((a, b) => {
  let oddSumA = a.filter(num => num % 2 === 1).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  let oddSumB = b.filter(num=> num % 2 === 1).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
  return oddSumA - oddSumB;
});

console.log(arr);



//[ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]