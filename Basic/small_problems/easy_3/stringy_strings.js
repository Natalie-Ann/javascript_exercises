//Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. 
//The length of the string should match the given integer.

/*
Input: positive integer
Output: string alternating ones and zeros with length = input

- set empty string variable, newString
- newString.length = number;
- for loop ( i starts at 0, i ends at i < newString.length, i += 1)
  - if i is odd number, set new string value equal to 0
  - if i is even number, set new string equal to 1
  - return newString
*/





function stringy (number) {
  let newString = '';
  for (let i = 0; i < number; i += 1) {
    let number = ((i % 2) === 1) ? 0 : 1;
    newString = newString + number;
  }
  console.log(newString);
}


stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"