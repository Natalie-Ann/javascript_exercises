// Write a function that takes a string and returns an object containing three properties: 
// one representing the number of characters in the string that are lowercase letters, 
// one representing the number of characters that are uppercase letters, 
// and one representing the number of characters that are neither.

/*
Input: string
Output: object

Explicits:  - output object contains 3 properties with counts of upper/lower/neither characters
Implicits:  - spaces/non alpha characters count as neithers
            - empty string will return 0 for all

DS: array

Algorithm:
- Declare variable counts assigned to object with three properties set at 0
- if length of input string in 0, return counts object
- else split the string into characters
    - if char uppercase letter, increase uppercase by 1
    - if char lower letter, increase lower by 1
    - else increase neither by 1
- return the counts object
*/

// function letterCaseCount(string) {
//     let counts = {lowercase: 0, uppercase: 0, neither: 0};

//     if (string.length === 0) return counts;

//     string.split('').forEach(char => {
//         if (char.match(/[a-z]/gi)) {
//             if (char.toLowerCase() === char) {
//                 counts['lowercase'] += 1;
//             } else {
//                 counts['uppercase'] += 1;
//             }
//         } else {
//             counts['neither'] += 1;
//         }
//     });
//     return counts;
// }

function letterCaseCount(string) {
    let lowerCase = string.match(/[a-z]/g) || [];
    let upperCase = string.match(/[A-Z]/g) || [];
    let neither = string.match(/[^a-z]/gi) || [];

    return {
        lowercase: lowerCase.length,
        uppercase: upperCase.length,
        neither: neither.length
    };
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }