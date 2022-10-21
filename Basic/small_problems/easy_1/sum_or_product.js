/*Write a program that asks the user to enter an integer greater than 0, then asks whether the 
user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.*/

const readline = require('readline-sync');
let integer = Number(readline.question('Please enter an integer greater than 0: '));
let operator = readline.question('Enter "s" to compute the sum or "p" to compute the product: ');
let numbersToSum = [];
let numbersToMultiply = [];

function sumOrProduct(integer) {
  if (operator === 's') {
    for (let i = 1; i <= integer; i += 1) {
      numbersToSum.push(i);
    }
    let sum = numbersToSum.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(`The sum of the integers between 1 and ${integer} is ${sum}.`);
  } else if (operator === 'p') {
      for (let i = 1; i <= integer; i += 1) {
        numbersToMultiply.push(i);
      }
      let product = numbersToMultiply.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
      console.log(`The product of the integers between 1 and ${integer} is ${product}.`);
        };
      }

sumOrProduct(integer);







