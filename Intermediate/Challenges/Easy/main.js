//main.js file

const { addNumber, getNumbers } = require("./numbers");
const {sumOfSquares, square} = require("./squares");

addNumber(1);
addNumber(5);
addNumber(-3);
addNumber(4);
console.log(sumOfSquares()); // => 51

