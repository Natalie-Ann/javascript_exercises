const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];
const SCORE = {'You': 0, 'Computer': 0};

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayClear() {
  console.clear();
  console.log("");
  console.log("");
}

function displayWelcomeMessage() {
  console.clear();
  console.log('');
  console.clear();
  prompt('Welcome to Rock Paper Scissors Game! Best of 5 rounds wins.');
  console.log('');
}

function playerWins(choice, computerChoice) {
  return ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper'));
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if (playerWins(choice, computerChoice)) {
    prompt('You win!');
    SCORE['You'] += 1;
  } else if (choice === computerChoice) {
    prompt("It's a tie!");
  } else { 
    prompt('Computer wins!');
    SCORE['Computer'] += 1;
  }
  
  console.log('The new score is:');
  for (const [key, value] of Object.entries(SCORE)) {
    console.log(` ${key}: ${value}`);
  }
  
}

function displayRoundWinner() {
  let scores = Object.values(SCORE);
  if (scores.reduce((accum, currentValue) => accum + currentValue, 0) === 5) {
    let winningScore = Math.max(...scores);
    if (SCORE['You'] === winningScore) {
      return 'You got best of 5 rounds! You are the grand winner!';
    } else {
      return 'The computer is the round winner!';
    }
  }
  return 'No one has won the round yet!';
}

function displayScore() {
  console.log(SCORE);
}

displayWelcomeMessage();

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();
  if (choice === 's') {
    choice = 'scissors';
  }
  
  if (choice === 'r') {
    choice = 'rock';
  }
  
  if (choice === 'p') {
    choice = 'paper';
  }

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
    if (choice === 's') {
    choice = 'scissors';
    }
  
    if (choice === 'r') {
    choice = 'rock';
    }
  
    if (choice === 'p') {
    choice = 'paper';
    }
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);
  console.log(displayRoundWinner());
  if (displayRoundWinner() === 'You got best of 5 rounds! You are the grand winner!' || displayRoundWinner() === 'The computer is the round winner!') break;
 
  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
  
  displayClear();
  displayScore();
}

prompt('Thank you playing Rock Paper Scissors!');