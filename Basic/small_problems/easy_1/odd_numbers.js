//Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

/*
for (let i = 1; i <= 99; i += 2) {
  console.log(i);
}

*/

/*for (let i = 0; i <= 99; i += 1) {
  if (i % 2 === 1) {
    console.log(i);
  }
}

*/


const readline = require('readline-sync');
function prompt(message) {
  console.log(`=> ${message}`);
}

prompt("What is the limit of the numbers?");
let limit = readline.question();

for (let i = 0; i <= limit; i += 1) {
  if (i % 2 === 1) {
    console.log(i);
  }
}