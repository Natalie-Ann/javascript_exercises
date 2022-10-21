// Write a function that takes two arguments, an inventory item ID and a list of transactions, 
// and returns an array containing only the transactions for the specified inventory item.

/*
Input: number representing id, array containing objects with id property/value pairs
Output: array of objects with matching ids

Explicits:  - output array contains objects with matching input ids
Implicits:  - all parts of matching objects are in output array

DS: arrays

Algorithms:
- Filter transactions for objects that have same id as input
    - object.id === id
- Return filtered array
*/

function transactionsFor(id, array) {
    let filteredArray = array.filter(object => {
        return object.id === id;
    });
    return filteredArray;
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
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

