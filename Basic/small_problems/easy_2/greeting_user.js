//Write a program that will ask for user's name. 
//The program will then greet the user. If the user writes "name!" then the computer yells back to the user.

/* Input: string
Output: string
Explicit rules: 
  - if user inputs name with ! at end, computer returns with all caps message

- Get user input for name
- Greet user by name
  - return message + name
  - If user input has "!" at end, return message + name in all caps
*/

const readline = require('readline-sync');

console.log("What is your name? ");
let name = readline.question();

function greetUser () {
  let lastCharacter = name[name.length-1];
  if (lastCharacter === '!') {
    console.log(`HELLO ${name.slice(0, name.length - 1).toUpperCase()}. WHY ARE WE SCREAMING?`);
  } else {
    console.log(`Hello ${name}.`);
  }
}

greetUser();


