function multiply(number) {
  let readlineSync = require('readline-sync');
  let numberQuestions = readlineSync.question(number);
  return numberQuestions;
}

let firstNumber = multiply('Enter the first number: ');
let secondNumber = multiply('Enter the second number: ');
let multipliedNumbers = Number(firstNumber * secondNumber);

console.log(`${firstNumber} * ${secondNumber} = ${multipliedNumbers}`);