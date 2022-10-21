// Write a function that takes two sorted arrays as arguments and returns a new array that contains all the elements from both input arrays in sorted order.

// You may not provide any solution that requires you to sort the result array. You must build the result array one element at a time in the proper order.

// Your solution should not mutate the input arrays.

/*
Input: 2 arrays
Output: 1 array

Explicits:  - returned array contains elements from both input arrays sorted
            - cannot sort the result array (?) --> can't use sort method?
            - build result array one element at a time
            - don't mutate input arrays
Implicits:  - what does sort mean? ascending numeircal order
            - element are all positive integers
            - if one of the arrays is empty, return the other array
            - try to not use sort method ?
            - arrays don't to be the same length

DS: arrays

Algorithm:
- Check if either array is empty
    - if empty, return the other array
- Merge the two arrays
    - Concat array1 and array2 --> new array
- Declare result array set to empty array
- Iterate through the mergedArray
    - Slice index to index + 2 
        - if first element is < next element
            - push the first element to a different array
        - else push second element to the array
- If the length of the resulting array is less than the length of the merged array, then do something else
    - Find out which elements are missing
        - Filter mergedArray for elements that are not included in the resultingArray
    - Call the merge function on the two arrays
    - else return the array

[1, 5, 9], [2, 6, 8] 
[1, 5, 9, 2, 6, 8]
Find max
Find min

push min number
removed that number from mergedarray
find min number of mergedarray
push that min number


*/

function merge(array1, array2) {
    if (array1.length === 0 || array2.length === 0) {
        return (array1.length === 0 ? array2 : array1);
    }

    let mergedArray = array1.concat(array2);
    let resultArray = [];

    while (mergedArray.length > 0) {
        let min = Math.min(...mergedArray);
        resultArray.push(min);
        mergedArray.splice(mergedArray.indexOf(min), 1);
    }
    return resultArray;
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]