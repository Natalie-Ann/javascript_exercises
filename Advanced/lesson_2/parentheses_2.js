// Write a function that takes a string as an argument and returns true if the string contains properly balanced parentheses, false otherwise. Parentheses are properly balanced only when '(' and ')' occur in matching pairs, with each pair starting with '('.

/*
Input: string
Output: boolean

Explicits:  - return true if balanced parentheses
            - balanced = '( and ')' match up, with each pair starting with '('
Implicits:  - pairs don't have to be immediate
            - if number of parens is odd, return false
            - if no parens return true
            - first paren should be ( , last paren should be )

DS: strings

Algorithm:
- Create a regex that matches for each paren
- the pairs should be equal to the total number of parentheses/2

*/

function isBalanced(string) {
    let tally = 0;
    for (let i = 0; i <= string.length; i += 1) {
        if (string[i] === '(') {
            tally +=1;
        } else if (string[i] === ')') {
            tally -= 1;
        }
        if (tally < 0) {
            return false;
        }
    }
    return (tally === 0);
}


console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false