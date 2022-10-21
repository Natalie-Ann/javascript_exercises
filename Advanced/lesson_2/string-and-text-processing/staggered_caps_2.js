// Modify the function from the previous exercise so that it ignores non-alphabetic characters when determining whether a letter should be 
// upper or lower case. 
// Non-alphabetic characters should still be included in the output string, but should not be counted when determining the appropriate case.

/*
Input: string
Output: string

Explicits:  - output string has every other alphabetic character capitalized
            - non alpha characters do not count in alternation tally

DS: array

Algorithm:
    - Split string into array of chars
    - Declare variable lastAlpha
    - Iterate through charArray
        - if char is alpha 
            - if lastAlpha is upperCase, change char to lowercase
            - if lastAlpha is lowerCase, change char to uppercase
            - reassign lastAlpha to char
    - Join new array
*/

function staggeredCase(string) {
    let charArray = string.split('');
    let lastAlpha = '';
    let newArray = charArray.map(char => {
        if (char.match(/[a-z]/gi)) {
            if (lastAlpha === lastAlpha.toLowerCase()) {
                char = char.toUpperCase();
                lastAlpha = char;
            } else {
                char = char.toLowerCase();
                lastAlpha = char;
            }
        }
        return char;
    });
    console.log(newArray.join(''));
}

staggeredCase('I Love Launch School!');        // "I lOvE lAuNcH sChOoL!"
staggeredCase('ALL CAPS');                     // "AlL cApS"
staggeredCase('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 nUmBeRs"