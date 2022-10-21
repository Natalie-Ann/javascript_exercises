/*Create a function that takes two integers as arguments. 
The first argument is a count, and the second is the starting number of a sequence that your function will create. 
The function should return an array containing the same number of elements as the count argument. 
The value of each element should be a multiple of the starting number.

You may assume that the count argument will always be an integer greater than or equal to 0. 
The starting number can be any integer. If the count is 0, the function should return an empty array.

Input: 2 numbers....number that is the length of the array, number that is the starting element of the array
Output: array with multiples of second number

Explicits:  - if first number is 0, return empty array
            - first number >= 0
            - second number any integer, including negatives
Implicits:  - if second number is 0, all elements will be zero
            - if second number is negative, all elements will be negative
            
Data Structure: array
element 1 (at index 0): 1 * argument2
element 2: 2 * argument2
element 3: 3 * argument2

Algorithm:
- Start function w/2 arguments (limit, startingNumber)
  - Create empty array and assign to variable multiples
  - Create a FOR loop
    - initialization: i = 0
    - stopping condition: i <= limit
    - iteration statement: i += 1
      - multiples[i] = (i+1) * startingNumber
  - Return multiples
*/
function sequence (limit, startingNumber) {
  let multiples = [];
  for (let i = 0; i < limit; i += 1) {
    multiples[i] = (i+1) * startingNumber;
  }
  return multiples;
}


console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []