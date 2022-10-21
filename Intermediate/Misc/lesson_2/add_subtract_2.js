// Write a program that uses two functions, add and subtract, to manipulate a running total. When you invoke either function 
// with a number, it should add or subtract that number from the running total 
// and log the new total to the console. It should work like this:

let count = 0;

function add(number) {
  count = count + number;
  console.log(count);
}

function subtract(number) {
  count = count - number;
  console.log(count);
}

add(1);       // 1
add(42);      // 43
subtract(39); // 4
add(6);       // 10