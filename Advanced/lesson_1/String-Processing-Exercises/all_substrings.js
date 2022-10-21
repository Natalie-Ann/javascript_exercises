// Write a function that returns a list of all substrings of a string. 
// Order the returned list by where in the string the substring begins. 
// This means that all substrings that start at index position 0 should come first, 
// then all substrings that start at index position 1, and so on. Since multiple substrings will occur at each position, 
// return the substrings at a given index from shortest to longest.

// You may (and should) use the leadingSubstrings function you wrote in the previous exercise:

/*
Input: string
Output: array

Explicits:  - output array has all substrings of a string in order of where in the string the substring begins
                - order leading substrings, then leading substrings starting with index1, then index 2, etc
            - Use function from prev. exercise
Implicits:  - no empty string input ?

DS: string --> array

Algorithm:
- Declare all substrings array
- Iterate through the string
    - For each element, find leading substrings and push result to empty array
- Flatten substrings array
- Return all substrings array

*/

// function leadingSubstrings(string) {
//     let array = [];
//     for (let i = 0; i < string.length; i += 1) {
//         array.push(string.slice(0, i + 1));
//     }
//     return array;
// }

// function substrings(string) {
//     let allSubstrings = [];
//     for (let i = 0; i < string.length; i += 1) {
//         let stringSlice = string.slice(i);
//         allSubstrings.push(leadingSubstrings(stringSlice));
//     }
//     console.log(allSubstrings.flat());
// }

function leadingSubstrings(string) {
    return [...string].reduce((accum, current, index, array) => {
        accum.push(string.slice(0, index + 1));
        return accum;
    }, []);
}

function substrings(string) {
    let allSubs = [...string].reduce((accum, current, index) => {
        let subs = leadingSubstrings(string.slice(index));
        return accum.concat(subs);
    }, []);
    return allSubs;
};

console.log(substrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]