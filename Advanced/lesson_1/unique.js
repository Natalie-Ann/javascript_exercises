/*
Input: string
Output: boolean

Explicits: - return true if all characters unique (not including white spaces)
Implicits: - ignore case

DS: regex?

Algorithm:
- Match all characters that are not space characters -->match array
- Create tally object {char:count}
- Iterate through the match array, creating tally for each character
    - if char exists in the tally object, increase count by 1
    - if char does not exist, set count to 1
- If every count in tally object === 1, then return true
*/



function isAllUnique(string) {
    let nonWhiteSpaceChars = string.toLowerCase().match(/\S/gi);
    let countObject = {};
    nonWhiteSpaceChars.forEach(char => {
        if (countObject[char]) {
            countObject[char] += 1;
        } else {
            countObject[char] = 1;
        }
    });
    console.log(Object.values(countObject).every(char => char === 1));
  }
  
  isAllUnique('The quick brown fox jumped over a lazy dog');  // false
  isAllUnique('123,456,789');                                 // false
  isAllUnique('The big apple');                               // false
  isAllUnique('The big apPlE');                               // false
  isAllUnique('!@#$%^&*()');                                  // true
  isAllUnique('abcdefghijklmnopqrstuvwxyz');                  // true