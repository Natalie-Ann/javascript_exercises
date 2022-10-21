// Write a function that takes an array of numbers and returns the sum of the sums of each leading subsequence in that array. 
// Examine the examples to see what we mean. 
// You may assume that the array always contains at least one number.

/*
Input: array
Ouput: number

Explicits:  - input array always contains >= one number
            - output number is sum of sums of numbers in input array
Implicits:  - sum of sums is (leading number + next number) + (leading number + next number + third number) + (leading number + next# + 3rd# + 4th#...)
            - if input array is one number, return that number

DS: arrays

Algorithm:
- Declare variable arrayOfSums initialized to empty array
- Get leading subsequences
    - forEach method
        - for length of array, slice previous elements plus current element and add slices together (reduce)
        - push to the empty array
- Add the subsequence numbers together (reduce); initialize this to sumOfSums
- Return the sumOfSums
*/

function sumOfSums(array) {
    let arrayOfSums = [];
    array.forEach((number, index, array) => {
        let subsequence = array.slice(0, index + 1).reduce((accum, current) => accum + current, 0);
        arrayOfSums.push(subsequence);
        });
    let sumOfSums = arrayOfSums.reduce((accum, current) => accum + current, 0);
    return sumOfSums;
}


sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35