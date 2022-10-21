/*Write a program that solicits six numbers from the user and logs a message that describes 
whether the sixth number appears among the first five numbers.

Input: user gives 6 numbers
Output: string; tells whether 6th number is within first 5

Array?

- Get 6 numbers
  - add these numbers to an array
- Check if 6th number is within first 5
  - if array.includes(6th number) then log message
- Log message

*/

const readline = require('readline-sync');
const numbersArray = [];

function prompt(msg) {
  console.log(`=>${msg}`);
}

function obtainNumbers() {
prompt("Give me a number: ");
let num1 = Number(readline.question());
numbersArray.push(num1);

prompt("Give me another number: ");
let num2 = Number(readline.question());
numbersArray.push(num2);

prompt("Give me a third number: ");
let num3 = Number(readline.question());
numbersArray.push(num3);

prompt("Give me a fourth number: ");
let num4 = Number(readline.question());
numbersArray.push(num4);

prompt("Give me a fifth number: ");
let num5 = Number(readline.question());
numbersArray.push(num5);

prompt("Give me a sixth number: ");
let num6 = Number(readline.question());

if (numbersArray.includes(num6)) {
  prompt(`The number ${num6} appears in ${numbersArray}.`);
  } else {
  prompt(`The number ${num6} does not appear in ${Object.values(numbersArray)}`);
  }
}

obtainNumbers();



/*

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in 25,15,20,17,23.


*/