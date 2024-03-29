const readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

function displayBoard (board) {
  console.clear();
  
  console.log(`You are ${HUMAN_MARKER} and computer is ${COMPUTER_MARKER}.`);
  
  console.log("");
  console.log('     |     |');
  console.log(`   ${board[1]} |  ${board[2]}  |  ${board[3]}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`   ${board[4]} |  ${board[5]}  |  ${board[6]}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |     ');
  console.log(`   ${board[7]} |  ${board[8]}  |    ${board[9]}`);
  console.log('     |     |     ');
  console.log("");
};

function initializeBoard () {
  let board = {};
  for (let square = 1; square <= 9; square += 1) {
    board[String(square)] = INITIAL_MARKER;
  }
  return board;
}

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function emptySquares (board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7],[2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]
    ];
    
  for (let line = 0; line < winningLines.length; line += 1) {
    let [sq1, sq2, sq3] = winningLines[line];
    
    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
      ) {
        return 'Player';
      } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
      ) {
        return 'Computer';
      }
  }
  return null;
}

function joinOr (array, separator = ', ', lastWord = 'or') {
  if (array.length === 2) {
    return `${array[0]} or ${array[1]}`;
    }
  else if (array.length === 0) {
    return `${'nothing here'}`;
  } else if (array.length === 1) {
    return `${array[0]}`;
  } else {
    let newString = array.join(separator);
    let end = `${lastWord} ${newString.slice(-1)}`;
    let finalString = newString.slice(0, -2) + ` ${end}`;
    return finalString;
  }
}

function playerChoosesSquare(board) {
  let square;
  
  while(true) {
    prompt(`Choose a square ${joinOr(emptySquares(board))}:`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;
    
    prompt("That's not a valid choice.");
    
  }
  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
   
   let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
   let square = emptySquares(board)[randomIndex];
   
   board[square] = COMPUTER_MARKER;
}

while(true) {
  let board = initializeBoard();
  
  while(true) {
  displayBoard(board);
  
  playerChoosesSquare(board);
  if (someoneWon(board) || boardFull(board)) break;
  
  computerChoosesSquare(board);
  if (someoneWon(board) || boardFull(board)) break;
  }
  
  displayBoard(board);

  if (someoneWon(board)) {
  prompt(`${detectWinner(board)} won!`);
  } else {
  prompt("It's a tie!");
  }
  
  prompt("Do you want to play again (y/n)?");
  let answer = readline.question().toLowerCase()[0];
  if (answer !== 'y') break;
}

prompt("Thanks for playing Tic-Tac-Toe!");

