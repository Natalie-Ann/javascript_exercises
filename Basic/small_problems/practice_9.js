/*
Given the following data structure, return a new array with the same structure, 
but with the values in each subarray ordered -- alphabetically or numerically as appropriate -- in ascending order.
*/


let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

console.log(arr.map(subarray => {
  if (typeof subarray[0] === 'number') {
    return subarray.slice().sort((a, b) => a - b);
  } else {
    return subarray.slice().sort();
  }
}));

console.log(arr);