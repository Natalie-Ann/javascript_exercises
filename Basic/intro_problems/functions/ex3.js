// Write a program that uses a multiply function to multiply two numbers and returns the result. 
// Ask the user to enter the two numbers, then output the numbers and result as a simple equation.

function multiply () {
  let rlSync = require('readline-sync');
  let num1 = Number(rlSync.question(`Enter number: `));
  let num2 = Number(rlSync.question(`Enter second number: `));
  return console.log(`${num1} * ${num2} = ${num1 * num2}.`);
}

multiply();


