// a function that returns the sum of two numbers

/* START
- GET first number from user and SET variable 1 = first number
- GET second number from user and SET variable 2 = second number
- use + operator in return statement of function to PRINT sum of first and second number
- call the function
END
*/

const readline = require('readline-sync');

console.log('What is the first number?');
let number1 = readline.question();

console.log('What is the second number?');
let number2 = readline.question();

function sumNumbers () {
  let output = Number(number1) + Number(number2);
  return console.log(output);
}

sumNumbers();





