/*
Write a function that takes two arguments, an inventory item ID and a list of transactions, 
and returns an array containing only the transactions for the specified inventory item.

Input: number (value of property ID in each object), transactions array of nested objects
Output: array

Explicits:  - Returned array only contains elements in the transactions array that contain the correct key-value pair
Implicits:  - Returned array contains all parts of the element object

Data Structure: array --> match key-value pair from array ---> output array

Algorithm:
  - Declare function w/2 arguments - value (number) and transactions array
  - Filter transactions array for matching key-value pair
    - Use filter method: if first key-value pair of element in array is id: 101, then returns truthy
  - Return filtered array

*/

function transactionsFor(value, transactions) {
  return transactions.filter(element => element['id'] === value);
}


let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]