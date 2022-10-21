/*
The parseInt() method converts a string of numeric characters (including an optional plus or minus sign) to an integer. 
The method takes 2 arguments where the first argument is the string we want to convert and the second argument 
should always be 10 for our purposes. parseInt() and the Number() method behave similarly. In this exercise, 
you will create a function that does the same thing.

Write a function that takes a string of digits and returns the appropriate number as an integer. 
You may not use any of the methods mentioned above.

For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will be numeric.

You may not use any of the standard conversion methods available in JavaScript, such as String() and 
Number(). Your function should do this the old-fashioned way and calculate the result by analyzing the characters in the string.


Input: string
Output: number

Explicits:  - input values are numeric
            - output is the input string as a number
Implicits: ?

Data Structure:  string --> array --> reduce method? number

Algorithm:
  - Start function with string argument
    - Conver string to an array of characters
    - Convert string characters to number character in the array
    - Iterate through the array
      - Use reduce method to add the digits up by multiplying by 10?
        4321 (accum, current) => (acc*10) + current) --- when no initial value provided, automatically assigned accumulator to element 0, which is 4
        and iteration starts at elemnt1 (current getsassigned element 1)
        4*10 + 3 = 43
        43*10 + 2 = 432
        432*10 + 1 = 4321
  

*/

function stringToInteger(string) {
  let characterArray = string.split('');
  let numbersObject = {0: 0, 1: 1, 2: 2, 3: 3, 4:4, 5:5, 6:6, 7: 7, 8: 8, 9:9, 10:10};
  let numbersArray = characterArray.map(char => char = numbersObject[char]);
  return numbersArray.reduce((accumulator, currentValue) => (accumulator * 10) + currentValue);
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true