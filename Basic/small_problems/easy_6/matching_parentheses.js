/*
Write a function that takes a string as an argument and returns true if all parentheses in the string are properly balanced, false otherwise. 
To be properly balanced, parentheses must occur in matching '(' and ')' pairs.

The tests below should log true.

Note that balanced pairs must each start with a (, not a ).

Input: Boolean
Output: Boolean

Explicits: if pair of () is balanced, return true
Implicits:  - to be balanced, () has to be even number
            - to be balanced, first has to be ( and second has to be)
            - if no ( ) , return true

Data structure: string?

- if string does not include "(" or ")", return true
else if
- if number of ( ) is same, return true
else
- return false

Algorithm:
- make a tally
  - start tally @ 0
  - Loop through the string
    - if string[index] === '('
       - add 1
    - if string[index] === ')'
      - minus 1
  - return if tally @ end is equal to zero


*/

function isBalanced(string) {
  let tally = 0;
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === '(') {
      tally = tally + 1;
    } else if (string[i] === ')') {
        tally = tally - 1;
    } if (tally < 0) return false;
  }
  return tally === 0;
}


  
 

console.log(isBalanced("What (is) this?")); // === true
console.log(isBalanced("What is) this?")); // === false
console.log(isBalanced("What (is this?")); // === false
console.log(isBalanced("((What) (is this))?")); // === true
console.log(isBalanced("((What)) (is this))?")); // === false
console.log(isBalanced("Hey!")); // === true
console.log(isBalanced(")Hey!(")); // === false
console.log(isBalanced("What ((is))) up(")); // === false);