// Write a function that takes a string as an argument and returns that string with a staggered capitalization scheme. 
// Every other character, starting from the first, should be capitalized and should be followed by a lowercase or 
// non-alphabetic character. Non-alphabetic characters should not be changed, 
// but should be counted as characters for determining when to switch between upper and lower case.

/*
Input: string
Output: string

Explicits: output string should have every other character capitalized, first character always capitalized
            - do not change non-alpha characters
            - count non-alpha chars in alternation
Implicits:  

DS: array

Algorithm:
- Split string into array of chars
    - if char is alpha
        - if char has odd index, change to uppercase
        - if char has even index, change to lowercase
    - else return char
- Join array to string and return that string
*/

function staggeredCase(string) {
    let charArray = string.split('');
    let newArray = charArray.map((char, index) => {
        if (char.match(/[a-z]/gi)) {
            if (index % 2 === 0) {
                return char.toUpperCase();
            } else {
                return char.toLowerCase();
            }
        }
        return char;
    });
    console.log(newArray.join(''));
}

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"