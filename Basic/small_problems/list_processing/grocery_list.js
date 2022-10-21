/*
Write a function that takes a grocery list in a two-dimensional array and returns a one-dimensional array. 
Each element in the grocery list contains a fruit name and a number that represents the desired quantity of that fruit. 
The output array is such that each fruit name appears the number of times equal to its desired quantity.

In the example below, we want to buy 3 apples, 1 orange, and 2 bananas. 
Thus, we return an array that contains 3 apples, 1 orange, and 2 bananas.

Input: array of arrays
Output: array of strings

Explicits:  - output array has fruit name repeated the number of times from the input array
            - input array = [fruit, quantity]
            - output array = fruit repeated quanity of times
Implicits:  

Data Structure: nested array --> access elements within array --> new array

Algorithm:
- Start function with array parameter
  - Declare a variable outputArray and initialize to an empty array
  - Iterate through the input array
    - fruit = inputArray[i][0]
    - quantity = inputArray[i][1]
    - while (quanity > 0) 
      - outputObject.push(fruit)
      - quantity -= 1


*/

/*
function buyFruit(array) {
  let outputArray = [];
  array.forEach(innerArray => {
    let [fruit, quantity] = innerArray;
    innerArray.forEach(element => {
      while (quantity > 0) {
        outputArray.push(fruit);
        quantity -= 1;
      }
    });
  });
  console.log(outputArray);
}
*/


function buyFruit(fruitsList) {
  return fruitsList
    .map(fruit => repeat(fruit));
    //.reduce((groceryList, fruit) => groceryList.concat(fruit));
}

function repeat(fruitAndQuantity) {
  let result = [];
  let fruit = fruitAndQuantity[0];
  let quantity = fruitAndQuantity[1];

  for (let num = 0; num < quantity; num += 1) {
    result.push(fruit);
  }

  return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]