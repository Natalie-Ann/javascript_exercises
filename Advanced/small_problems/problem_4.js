// You are given a list of numbers in a "short-hand" range where only the significant part of the next number is written because we know the numbers are always increasing (ex. "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14, 21]). Some people use different separators for their ranges (ex. "1-3, 1-2", "1:3, 1:2", "1..3, 1..2" represent the same numbers [1, 2, 3, 11, 12]). Range limits are always inclusive.

// Your job is to return a list of complete numbers.

// The possible separators are: ["-", ":", ".."]

/*
Input: string
Output: string??

Explicits:  - input string is a list of numbers in shorthand
            - output string is the numbers in regular notation
            - numbers are listed in ascending order
            - shorthand numbers list only the significant parts of the next number
            - different separator used for ranges; ranges ALWAYS inclusive
Implicits:  - First number in input string is always the first number in the output string
            - Will the numbers be integers? other data types? empty string input? 
            - separators :, -, .. mean that the numbers increase by 1 from the beginning to end of the range
            - Number of numbers in input does not equal the count of the numbers in output

How to find the next number with only the significant number?
    - increase by 1 until the last digits of the complete number equals the significant number
    - if there is a jump (comma), next number is the one higher than current number that has those last digits

DS: arrays?

Algorithm:
- Split the string into ranges/numbers (comma separator)
- Replace any ..: with -
- Declare variable result array
- Iterate through the matches
    - if it is a range, find the top number
        - add the element, element + 1 until hit the top number
    - if not a range, just find the top number and add to the array
- Return result
*/

// function completeNumbers(string) {
//     let matches = string.split(', ');
//     let cleanMatches = matches.map(match => match.replaceAll(/[:.]{1,2}/g, '-'));
//     let result = [];
//     cleanMatches.forEach((match, index) => {
//         if (match.includes('-')) {
//             let lastNumber = result.slice.pop() ? result.slice().pop() : 
//             let divisionIndex = match.indexOf('-');
//             let startNumber = match.slice(0, divisionIndex);
//             result.push(startNumber);
//             let topNumber = findTopNumber(startNumber, match.slice(divisionIndex + 1));
//             result.push(topNumber);
//         } else {
//             if (index === 0) {
//                 result.push(match);
//             } else {
//                 let nextNumber = findTopNumber(result.slice().pop(), match);
//                 result.push(nextNumber);
//             }
//         }
//     });
//     console.log(result);
// }


// function findTopNumber(lastStringNumber, currentSignificantNumber) {
//     let number = Number(lastStringNumber) + 1;
    
//     while (true) {
//         let stringNumber = String(number);
//         if (stringNumber.endsWith(currentSignificantNumber)) {
//             break;
//         }
//         number +=1;
//     }
//     return String(number);
// }


// console.log(findTopNumber('14', '1'));

// completeNumbers("1-3"); // 1, 2, 3
// completeNumbers("1:5"); // 1, 2, 3, 4, 5
// completeNumbers("1..5"); // ['1-5']


// completeNumbers("1, 3, 7, 2, 4, 1"); //  --> 1, 3, 7, 12, 14, 21
// // completeNumbers("1-3, 1-2");  // 1, 2, 3, 11, 12
// // completeNumbers("1:5:2"); // 1, 2, 3, 4, 5, 6, ... 12
// // completeNumbers("104-2"); // 104, 105, ... 112
// // completeNumbers("104-02"); // 104, 105, ... 202
// completeNumbers("545, 64:11"); // 545, 564, 565, .. 611 