//Try coding a solution that doubles the numbers that have odd indices:

let myNumbers = [1, 4, 3, 7, 2, 6];
let doubleOdds = [];

function doubleOddIndexes (array) {
  for (let i = 0; i < array.length; i += 1){
    let currentNumber = array[i];
    if (i % 2 === 1) {
      doubleOdds.push(currentNumber * 2);
    } else {
      doubleOdds.push(currentNumber);
    }
  }
  return doubleOdds;
}

console.log(doubleOddIndexes(myNumbers));