// Write a function that takes a string argument and returns true if all of the alphabetic characters inside the string are uppercase; 
// otherwise, return false. Ignore characters that are not alphabetic.

/*
Input: string
Output: boolean

Explicits:  - returns true if all characters in input string are uppercase
            - ignore characters that are not alphabetic
Implicits:  - empty strings return true

DS: strings --> array

Algorithm:
    - split string into characters
    - iterate through array of characters (every)
        - if character is alphabetic and lowercase return false
        - else return true
*/

function isUppercase(string) {
    let charArray = string.split('');
    console.log(charArray.every(char => {
        if (char.match(/[A-Z]/gi)) {
            return char.toUpperCase() === char;
        } else {
            return true;
        }
    }));
}



isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true