/*
Write a function that takes an array of numbers and returns the sum of the sums of each leading subsequence in that array. 
Examine the examples to see what we mean. You may assume that the array always contains at least one number.

Input: array
Output: number

Explicits:  - output number is sum of each element summed up with the elements before it
            - arrays always contains one numbers
Implicits:  - one number array will return that number

Data Structure: array
array[0] + (array[0] + array[1]) + array[0] + array[1] + array[2]

Algorithm:
- Start function w/array argument
  - Initialize a variable outputArray and assign the value of empty array
  - FOR loop
    - initialization: i = 0
    - stop condition: i < array.length
    - iteration: i += 1
      - push elements to the outputArray that are sums of the elements before it
        - outputArray[0] = array[0]
        - outputArray[1] = outputArray[0] + array[1]
        - outputArray[2] = outputArray[1] + array[2]
        - outputArray[3] = outputArray[2] + array[3]
          - outputArray[i] = outputArray[i] + array[i]
    - Use reduce method on output array and save to variable result
    - Return result
    
*/


function sumOfSums(array) {
  let outputArray = array.slice();
  for (let i = 1; i < outputArray.length; i += 1) {
    outputArray[i] = outputArray[i] + outputArray[i-1];
  }
  console.log(outputArray.reduce((accumulator, initialValue) => accumulator + initialValue, 0));
}


sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35