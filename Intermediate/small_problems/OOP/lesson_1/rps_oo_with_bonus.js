const readline = require('readline-sync');
const SCORE = {You: 0, Computer: 0};

function createPlayer() {
  return {
    move: null,
  };
}

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    choose() {
      const choices = ['rock', 'paper', 'scissors'];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
    },
  };
  return Object.assign(playerObject, computerObject);
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose() {
      let choice;

      while (true) {
        console.log('Please choose rock, paper, or scissors:');
        choice = readline.question();
        if (['rock', 'paper', 'scissors'].includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }
      this.move = choice;
    },
  };
  return Object.assign(playerObject, humanObject);
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),

  displayWelcomeMessage() {
    console.clear();
    console.log('');
    console.clear();
    console.log('Welcome to Rock, Paper, Scissors!');
    console.log('');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  },
  
  displayClear() {
  console.clear();
  console.log("");
  console.log("");
},

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
      (humanMove === 'paper' && computerMove === 'rock') ||
      (humanMove === 'scissors' && computerMove === 'paper')) {
      console.log('You win!');
      SCORE.You += 1;
    } else if ((humanMove === 'rock' && computerMove === 'paper') ||
             (humanMove === 'paper' && computerMove === 'scissors') ||
             (humanMove === 'scissors' && computerMove === 'rock')) {
      console.log('Computer wins!');
      SCORE.Computer += 1;
    } else {
      console.log("It's a tie");
    }
  },
  
  displayScore() {
    console.log("The score is:", SCORE);
  },
  
  displayRoundWinner() {
    if (SCORE.You === 5) {
      console.log("You are the round winner!");
      return true;
    } else if (SCORE.Computer === 5) {
      console.log('The computer is the round winner!');
      return true;
    }
    return false;
  },

  playAgain() {
    console.log('Would you like to play again? (y/n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y';
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      this.displayScore();
      if (this.displayRoundWinner()) break;
      if (!this.playAgain()) break;
      this.displayClear();
    }
    this.displayGoodbyeMessage();
  },
};

RPSGame.play();