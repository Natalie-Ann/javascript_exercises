/*Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, and injects them into a story that you create.

Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

// console output
Do you walk your blue dog quickly? That's hilarious!
The blue dog walks quickly over the lazy dog.
The dog quickly walks up blue Joe's turtle.

*/

const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=>${msg}`);
}

function game() {
  prompt("Welcome to Madlibs Game!");
   prompt("Enter a noun: ");
  let noun = readline.question();

  prompt("Enter a verb: ");
  let verb = readline.question();

  prompt("Enter an adjective: ");
  let adjective = readline.question();

  prompt("Enter an adverb: ");
  let adverb = readline.question();
  
  console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!
  The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.
  The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.
  `);
}

while (true) {
  prompt("Welcome to Madlibs Game!");
  
  prompt("Enter a noun: ");
  let noun = readline.question();

  prompt("Enter a verb: ");
  let verb = readline.question();

  prompt("Enter an adjective: ");
  let adjective = readline.question();

  prompt("Enter an adverb: ");
  let adverb = readline.question();
  
  console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!
  The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.
  The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.
  `);
  
  prompt("Would you like to play again (y/n)?");
  let answer = readline.question().toLowerCase[0];
  
  if (answer !== 'y') {
    break;
  }
}

prompt("Thank you for playing!");