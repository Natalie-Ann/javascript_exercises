/*Write two distinct ways of reversing the array 
without mutating the original array. Use reverse for the first solution, and sort for the second.


*/

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.slice().reverse());
//numbers.reverse();
//console.log(numbers); // [ 5, 4, 3, 2, 1 ]

//numbers = [1, 2, 3, 4, 5];
//numbers.sort((num1, num2) => num2 - num1);
//console.log(numbers); // [ 5, 4, 3, 2, 1 ]

console.log([...numbers].sort((num1, num2) => num2 - num1));

let forEachNumbers = [];
numbers.forEach(number => forEachNumbers.unshift(number));
console.log(forEachNumbers);
console.log(numbers);