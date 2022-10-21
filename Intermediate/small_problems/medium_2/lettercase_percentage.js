// Write a function that takes a string and returns an object containing the following three properties:

// the percentage of characters in the string that are lowercase letters
// the percentage of characters that are uppercase letters
// the percentage of characters that are neither
// You may assume that the string will always contain at least one character.

/*
Input: string
Output: object

Explicit:   - output object has 3 properties, lowercase, uppercase, neither
            - property values are percentages of characters in the string with those character types
            - string will not be empty
Implicits:  - 2 places after decimal
            - percentage values are strings
            - spaces count in percentages/neither

DS: string

Algorithm:
- Get length of string
- Declare variable object {lowercase: Math.round(0/length, 2), uppercase: 0/length, neither: 0/length}
- Iterate through the string
    - if character is alpha
        - if lower
            - add 1 to lower property
        - else
            - add 1 to upper property
    - else
        - add 1 to neither property
- Return variable object
*/

function letterPercentages(string) {
    let lengthOfString = string.length;
    let percentageObject = {lowercase: 0, uppercase: 0, neither: 0};
    for (let i = 0; i < lengthOfString; i += 1) {
        if (string[i].match(/[a-z]/g)) {
            percentageObject['lowercase'] += 1;
        } else if (string[i].match(/[A-Z]/g)) {
            percentageObject['uppercase'] += 1;
        } else {
            percentageObject['neither'] += 1;
        }
    }
    for (let prop in percentageObject) {
        percentageObject[prop] = (percentageObject[prop]/lengthOfString * 100).toFixed(2);
    }
    console.log(percentageObject);
}

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }