//Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.

/*
Input: positive integer (number)
Output: array of numbers

Explicits: output array consists of digits of input
Implicits: all digits count, what happens with no argument?

Data structure: number --> array

Algorithm:
- Start function with number argument
  - Convert number to string 
  - Use split method to change string into array of characters
  - Assign to variable stringArray
  - Change values into number data type
    - Create numbersArray variable assign to map method called on stringArray
      - callback function
        - return Number(element)
  - Return numbersArray

*/

function digitList (number) {
  let stringArray = String(number).split('');
  let numbersArray = stringArray.map(element => Number(element));
  console.log(numbersArray);
}


digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]