/*Building on the previous exercise, write a function that returns true or false based on whether or not an inventory item is available. 
As before, the function takes two arguments: an inventory item and a list of transactions. 
The function should return true only if the sum of the quantity values of the item's transactions is greater than zero. 
Notice that there is a movement property in each transaction object. A movement value of 'out' will decrease the item's quantity.

You may (and should) use the transactionsFor function from the previous exercise.

Input: number (value of property ID in each object), transactions array of nested objects
Output: boolean

Explicits:  - Return true if in > outs
Implicits:

Data Structure: array --> filter elements for ones that match key-value pair --> compare ins/outs --> Boolean

Algorithm:
- Start function with value, array arguments
- Call transactionsFor function and declare variable filteredArray to the return value
- Count ins in filteredArray
  - declare variable countIns and set equal to zero
  - Use filter method on the filteredArray filter for an element['movement'] is 'in'
    - forEach element, add element[quantity] to count
- Count outs in filteredArray
  - decleare variable countOuts and set equal to zero
  - Use filter method on the filteredArray to filter for an element['movement'] is 'out'
    - forEach element, add[quality] to count
- if countIns > countOuts, return true


*/

function transactionsFor(value, transactions) {
  return transactions.filter(element => element['id'] === value);
}

function isItemAvailable(value, transactions) {
  let filteredArray = transactionsFor(value, transactions);
  let countIns = 0;
  let countOuts = 0;
  filteredArray.filter(element => element['movement'] === 'in').forEach(element => countIns = countIns + element['quantity']);
  filteredArray.filter(element => element['movement'] === 'out').forEach(element => countOuts = countOuts + element['quantity']);
  return (countIns > countOuts);
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

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true