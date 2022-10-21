/*Write a function that takes a string argument and returns a new string that contains the value of the original string with 
all consecutive duplicate characters collapsed into a single character. */

/*
- convert string to array (stringArray)
- select consecutive duplicates
  - initiate for loop
    - compare one value to next value
    - if different values, continue
    - if same values, delete second value
      - splice method (?)
- convert array back to new string
  - join method


*/


function crunch (string) {
  let stringArray = string.split('');
  let noRepeatsArray = [];
  
  for (let i = 0; i < stringArray.length; i += 1) {
    if (stringArray[i] !== stringArray[i + 1]) {
      noRepeatsArray.push(stringArray[i]);
    } else continue;
  } return noRepeatsArray.join('');
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""