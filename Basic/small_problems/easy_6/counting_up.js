/*Write a function that takes an integer argument and returns an array containing all integers between 1 and the argument (inclusive), in ascending order.

You may assume that the argument will always be a positive integer.

Input: number (integer)
Output: array

Explicits: array starts at 1, ends at input integer; counts by 1; input always positive integer
Implicits: no argument = empty array or 1? input 1 will just return 1;

Data structure: array

Algorithm:
- Start function
- Declare variable outputArray and set equal to empty array
- Start For loop
  - initialization: 1
  - stop condition: >= input number
  - iteration statement: += 1
    - Add element to output array up until stop condition
      - Use push method to add until reach stop condition
        - outputArray.push(i)
  - Return output Array
*/

/*function sequence (number) {
  let outputArray = [];
  for (let i = 1; i <= number; i += 1) {
    outputArray.push(i);
  }
  console.log(outputArray);
}

*/

/*New algorithm using map

- Start function with number parameter
  - convert number to an array 
    - convert to string then use split to convert to array
    - save result to variable stringArray ... ['5']
  - Use map to make an array of numbers up until number argument
      - map method
        - Number(element)
          - map again
            - for loop
              - initialization: i = 1
              - stop condition: <= element
              - iteration statement: i += 1
                - return i
*/

function sequence (number) {
  let stringArray = String(number).split('');
  let numberArray = stringArray.map(element => Number(element));
  let resultArray = numberArray.map(function getNumbers (element) { 
    for (let i = 1; i <= number; i += 1) {
                console.log(i);
              }
    });
  return resultArray;
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]