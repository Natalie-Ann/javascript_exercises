//squares.js file

const {getNumbers, addNumber} = require("./numbers");

function square(value) {
  return value * value;
}

function sumOfSquares() {
  return getNumbers().reduce((sum, number) => {
    return square(number) + sum;
  });
}


module.exports = { square, sumOfSquares };