/* Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. 
For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20). 

You may assume that the number passed in is an integer greater than 1. */

/*
Input: number; integer > 1
Output: number
Explicit rules: output is sum of multiples of 3 or 5 
  What is a multiple? 
    - 3 *1, 3*2, 3*3...
    - 5*1, 5*2, 5*3...
Implicit rules: can't use multiples twice; inclusive of last number

- Start function takes number argument
  - create empty array assigned to variable multiples
  - start a loop up to number argument
    - select for multiples of three or five and add to multiples array
    - exit loop
  - return the sum of all the values in the 2 arrays
    - reduce method


*/
  
  
function multisum(number) {
  let multiples = [];
  for (let i = number; i > 0; i -= 1) {
    if ((i % 3 === 0) || (i % 5 === 0)) {
      multiples.push(i);
    }
  }
  return multiples.reduce((accumulator, currentValue) => accumulator + currentValue);
}


  
console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168

