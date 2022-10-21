// Write a function that takes a grocery list in a two-dimensional array and returns a one-dimensional array. 
// Each element in the grocery list contains a fruit name and a number that represents the desired quantity of that fruit. 
// The output array is such that each fruit name appears the number of times equal to its desired quantity.

// In the example below, we want to buy 3 apples, 1 orange, and 2 bananas. 
// Thus, we return an array that contains 3 apples, 1 orange, and 2 bananas.

/*
Input: array
Output: array

Explicits:  - input array is an array of arrays; inner arrays have fruit name and quantity
            - output array is the fruit listed the quantity of times in the input array
Implicits:  - None

DS: array

Algorithm:
- Declare variable grocery_list initialized to an empty array
- Iterate through the input array
    - For each inner array, add the first element second element number of times to the grocery list
        - for loop OR fill
- Return the grocery_list array

*/

// function buyFruit(inputArray) {
//     let grocery_list = [];
//     inputArray.forEach(innerArray => {
//         for (let i = 1; i <= innerArray[1]; i += 1) {
//             grocery_list.push(innerArray[0]);
//         }; 
//     });
//     return grocery_list;
// }

function buyFruit(inputArray) {
    let grocery_list = [];
    inputArray.forEach(innerArray => {
        grocery_list = grocery_list.concat(Array(innerArray[1]).fill(innerArray[0]));
    });
    return grocery_list;
}

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]