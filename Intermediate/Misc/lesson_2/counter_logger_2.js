// Create a function named makeCounterLogger that takes a number as an argument and returns a function. 
// When we invoke the returned function with a second number, 
// it should count up or down from the first number to the second number, logging each number to the console:

'use strict mode';

function makeCounterLogger(firstNumber) {
  return function(secondNumber) {
    if (firstNumber < secondNumber) {
      for (let i = firstNumber; i <= secondNumber; i += 1){
        console.log(i);
      }
    } else {
      for (let i = firstNumber; i >= secondNumber; i -= 1) {
        console.log(i);
      }
    }
  };
}

let countlog = makeCounterLogger(5);
countlog(8);
// 5
// 6
// 7
// 8

countlog(2);
// 5
// 4
// 3
// 2