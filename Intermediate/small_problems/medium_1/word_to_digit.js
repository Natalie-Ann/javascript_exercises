// Write a function that takes a sentence string as an argument and returns that string with every occurrence of 
// a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.


/*
Input: string
Output: string

Explicits:  - output string has number words converted to digit characters
Implicits:  - other words stay the same
            - digits still separated by spaces

DS: array

Algorithm:
- Declare variable reference ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
- Iterate through the input string
    - Replace all words that are included in regex with their index in variable reference
        - string.replace(/()/, )
*/

// function wordToDigit(string) {
//    let numberReference = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
//    let regex = /(zero|one|two|three|four|five|six|seven|eight|nine)/gi;
//    let digitConversion = string.match(regex).map(word => numberReference.indexOf(word));
//    let newString = string.replace(regex, (match) => digitConversion.shift());
//    console.log(newString);
// }


function wordToDigit(string) {
    let numberReference = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let newString = string.replace(/[a-zA-Z]+/g, (match) => {
        console.log(match);
        if (numberReference.includes(match)) {
            return numberReference.indexOf(match);
        } else {
            return match;
        }
    });
    console.log(newString);
}




wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."
wordToDigit('The weight is done.');      // "The w8 is d1."