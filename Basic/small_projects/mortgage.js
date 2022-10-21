const readline = require('readline-sync');

function computerPrompt(message) {
  console.log(`${message}`);
}

function isInvalidNumber (number) {
  return Number(number) < 0 || 
         number.trim() === '' || 
         Number.isNaN(Number(number));
}

computerPrompt("Welcome to the Mortgage Calculator!");
 
while(true) {
  
  let loanAmount = Number(readline.question('What is the loan amount? $ '));
 
  let interestRate = Number(readline.question('What is the interest rate (i.e. 5 is 5%)? '));
  
  let loanDurationInMonths = Number(readline.question('What is the loan duration in months?'));
  
  let annualPercentageRate = interestRate / 100;
  
  let monthlyInterestRate = annualPercentageRate / 12;
  
  let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationInMonths))));

  computerPrompt(`Your monthly payment is ${monthlyPayment.toFixed(2)}.`);

  computerPrompt("Do you want to make another calculation?");
  let answer = readline.question();
  if (answer[0] === 'n') break;
}

