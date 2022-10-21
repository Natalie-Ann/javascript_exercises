// Write a function that takes an array as an argument and sorts that array using the bubble sort algorithm described above. 
// The sorting should be done "in-place" — that is, the function should mutate the array. 
// You may assume that the array contains at least two elements.

// A bubble sort works by making multiple passes (iterations) through an array. 
// On each pass, the two values of each pair of consecutive elements are compared. 
// If the first value is greater than the second, the two elements are swapped. 
// This process is repeated until a complete pass is made without performing any swaps — at which point the array is completely sorted.

/*
Input: array
Output: same array swapped

Explicits:  - each pair is compared
                - if first element is greater than second element, they are swapped; elements 0 and 1
                - continue with element 1 and 2 through to the end of the array
                - repeat process until no swaps
Implicits:  - with alphabetical elements sort alpabetically

DS: arrays

Algorithm:
- Do while loop
    - Declare variable numberOfSwaps, set to zero
    - for length of the input array 
        - compare pairs [0 and 1], [1 and 2], [2 and 3]...current index and index + 1
            - if first number is less than second number continue
            - if first number is > than second number switch numbers
                - increase numberOfSwaps by one for every swap
    - while numberOfSwaps is > 0;
- Return array
*/

function bubbleSort(array) {
    let numberOfSwaps = 0
    do {
        numberOfSwaps = 0;
        for (let i = 0; i < array.length; i += 1) {
            if (array[i] > array[i + 1]) {
                numberOfSwaps += 1;
            [   array[i], array[i + 1]] = [array[i + 1], array[i]];
            }
        }
    } while (numberOfSwaps > 0);
    console.log(array);
}

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];    /////// [2,6,7,1, 4] --> [2, 6, 1, 7, 4] ---> [2, 6, 1, 4, 7] --> [2, 1, 6, 4, 7] --> [2, 1, 4, 6, 7] --> [1, 2, 4, 6, 7]
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]