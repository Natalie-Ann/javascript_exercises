// Write a function that takes an array of integers between 0 and 19 and returns an array of those integers sorted based on the English 
// word for each number:

// zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

// Do not mutate the argument.

/*
Input: array of integers
Output: array of integers

Explicits:  - output array is integers sorted alphabetically based on their English word
            - do not mutate argument
Implicits:  - 0-19, same return value every time

DS: array

Algorithm:
    - Create a reference array with words, with index equivalent to number ['zero', 'one'...]
    - Make copy of the input array (slice)
    - Iterate through the copy
        - map a new array based on the English word; for each element, element reassigned to the equivalent value at same index in the reference array
            - element = referenceArray[index]
        - then sort that array
    - Convert the sorted array back to numbers using reference array
        - map a new array
            - element = referenceArray.indexOf(element);
    - Return the final array
*/

function alphabeticNumberSort(inputArray) {
    let referenceArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let wordArray = inputArray.map(number => number = referenceArray[number]).sort();
    let convertedArray = wordArray.map(word => word = referenceArray.indexOf(word));
    console.log(convertedArray);
}

alphabeticNumberSort(
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
 // [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]