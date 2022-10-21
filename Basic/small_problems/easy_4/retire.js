//Build a program that logs when the user will retire and how many more years the user has to work until retirement.

/*
Input: 2 numbers; current age, age would like to retire
Output: year it will retire, how many working years left

Implicit rules: 
  - retirementAge - currentAge = working years
  - current Year + workingyears = retirementYear
  
Data structure: number

- Get user's age
- get user's desired retirement age
- calculate retirement year
- calculate working years


*/

const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=>${msg}`);
}

while (true) {
prompt("What is your age? ");
let age = Number(readline.question());

prompt("At what age would you like to retire? ");
let retirementAge = Number(readline.question());

let currentYear = new Date().getFullYear();
let workingYears = retirementAge - age;
let retirementYear = currentYear + workingYears;

prompt(`It's ${currentYear}. You will retire in ${retirementYear}.`);
prompt(`You have only ${workingYears} years of work to go!`);

prompt("Would you like to recalculate? (y/n)");
let answer = readline.question().toLowerCase();
if (answer[0] !== 'y') break;

}

/*What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go! */