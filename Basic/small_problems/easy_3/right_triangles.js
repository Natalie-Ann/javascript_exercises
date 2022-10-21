/*Write a function that takes a positive integer, n, as an argument and logs a right triangle whose sides each have n stars. 
The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, 
and the other end at the upper-right. 

Input: positive integer
Output: star symbols in shape of right triangle
Explicit rules: length of each side of triange  = input; diagonal lower side on left, diagonal upper side on right.
Implicit rules: 
  - number of new lines = input
  - first line = blanks *(input -1) + input
  - second line = blanks* (input -2) + input
  - third line = blanks * (input -3) + input
  - ...
  
Data type: string

Algorithm:
- Start function (number)
  - create empty string assigned to variable triangle
  - create string with value "*" assigned to variable named star
  - for loop (ending at number)
    - triangle[i] = " " * (number-1) + star
    - triangle = triangle + triangle[i]
  - return triangle
*/

/*function triangle (number) {
  let resultTriangle = '';
  let star = '*';
  for (let i = 1; i <= number; i += 1) {
    let newLine = ' '.repeat(number-i) + star.repeat(i) + '\n';
    resultTriangle = resultTriangle + newLine;
  }
  return resultTriangle;
}

*/

function triangle(size) {
  for (let i = 1; i <= size; i++) {
    console.log('*'.repeat(i).padStart(size));
  }
}

console.log(triangle(5));
console.log(triangle(9));

/*
triangle(5);

    *
   **
  ***
 ****
*****

triangle(9);

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********

*/

