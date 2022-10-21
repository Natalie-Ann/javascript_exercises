/*
Write a function that takes two array arguments, each containing a list of numbers, 
and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. 
The returned array should be sorted in ascending numerical order.

You may assume that neither argument will be an empty array.

Input: 2 arrays
Output: 1 array

Explicits:  - output array contains all combinations of pairs of numbers in input arrays multiplied together
            - output array ascending order, smallest to biggest numerical
            - both arrays will contain numbers (not empty)
Implicits:  - include duplicated products
            - length of output array is length of input arrays multiplied together

Data Structure: 2 arrays --> 1 array
  - array1[0] * array2[0] = outputArray[0]
  - array1[0] * array2[1] = outputArray[1]
  - array1[0] * array2[2] = outputArray[2]
  
  - array1[1] * array2[0] = outputArray[]


Algorithm:
- Start function with 2 arrays as input
  - Initiate a variable resultArray and set equal to empty array
  - Use forEach method to iterate through both arrays and build resultArray
    - ForEach element in array1, iterate through elements in array2 and multiply together
      - forEach(element array1
          forEach element array2
                multiply them together and push to result array)
  - Sort resultArray
  - Return resultArray
  
*/

function multiplyAllPairs(array1, array2) {
  let resultArray = [];
  array1.forEach(element1 => array2.forEach(element2 => resultArray.push(element1 * element2)));
  return resultArray.sort((a,b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]