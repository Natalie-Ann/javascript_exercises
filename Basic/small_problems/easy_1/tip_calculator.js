/*Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. 
The program must compute the tip, and then log both the tip and the total amount of the bill to the console. 
You can ignore input validation and assume that the user will enter numbers.*/

const readline = require('readline-sync');
let bill = Number(readline.question('What is the bill? $'));
let tip_percentage = Number(readline.question('What is the tip percent? '));
let tip = (tip_percentage / 100) * bill;
let total = tip + bill;

console.log(`The tip is $${tip.toFixed(2)}.`);
console.log(`The total is $${total.toFixed(2)}.`);



