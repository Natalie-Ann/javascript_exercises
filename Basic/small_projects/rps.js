const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
let yourWins = 0;
let computerWins = 0;

function playerWins(choice, computerChoice) {
  return (choice === 'rock' && computerChoice === 'scissors') || (choice === 'rock' && computerChoice === 'lizard') ||
      (choice === 'scissors' && computerChoice === 'paper') || (choice === 'scissors' && computerChoice === 'lizard') ||
      (choice === 'paper' && computerChoice === 'rock') || (choice === 'paper' && computerChoice === 'spock') ||
      (choice === 'lizard' && computerChoice === 'paper') || (choice === 'lizard' && computerChoice === 'spock') ||
      (choice === 'spock' && computerChoice === 'scissors') || (choice === 'spock' && computerChoice === 'rock');
}

function displayWinner (choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}.`);
  if (playerWins(choice, computerChoice)) {
    return "You win!";
  } else if (choice === computerChoice) {
    return "It's a tie!";
  } else {
    return "Computer wins!";
  }
}

function displayScore (choice, computerChoice) {
  if (playerWins(choice, computerChoice)) {
    return yourWins += 1;
  } else if (playerWins(computerChoice, choice)) {
    return computerWins += 1;
  }
}

function prompt(message) {
  console.log(`=>${message}`);
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  console.log(displayWinner(choice, computerChoice));
  
  displayScore(choice, computerChoice);
  
if (yourWins >= 3) {
    console.log("You are the grand winner of this round!!!");
    yourWins = 0;
    computerWins = 0;
  } else if (computerWins >= 3) {
    console.log("The computer is the grand winner of this round!!");
    computerWins = 0;
    yourWins = 0;
  } else {
    console.log(`It's still ovarall a tie, your score: ${yourWins} and computer score: ${computerWins}.`);
  } 

  prompt("Do you want to play again (y/n)?");
  let answer = readline.question().toLowerCase();
  if (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt("Please enter 'y' or 'n'");
    answer = readline.question();
  }

  if (answer[0] !== 'y') break;
}


