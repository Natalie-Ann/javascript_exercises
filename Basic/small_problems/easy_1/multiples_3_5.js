/*
Write a function that computes the sum of all numbers between 1 and some other number, 
inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, 
the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.

Input: number
Output: number

Explicits:  - input number is integer greater than 1
            - output number is sum of numbers between 1 and input number that are multiples of 3 or 5
Implicits:  - multiples are not counted twice
            - include the limit number if it is a multiple
            
Examples/test cases: output is an integer

Data Structure: ??

Algorithm:
- Start function with number argument, called limit parameter
  - Declare a variable sum and initialize to 0
  - Start a for loop with number argument as limit
    - if i is a multiple of 3 or 5, add to sum
      - if i % 3 === 0 or i % 5 === 0, then add to sum
  - Return sum
*/

function multisum(limit) {
  let sum = 0;
  for (let i = 0; i <= limit; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum = sum + i;
    }
  }
  console.log(sum);
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168