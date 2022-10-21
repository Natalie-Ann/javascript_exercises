/*
Perform the same transformation of sorting the subarrays 
we did in the previous exercise with one difference; sort the elements in descending order.
*/

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

console.log(arr.map(subarray => {
  if (typeof subarray[0] === 'number') {
    return subarray.slice().sort((a,b) => b - a);
  } else return subarray.slice().sort().reverse();
  }));
  
