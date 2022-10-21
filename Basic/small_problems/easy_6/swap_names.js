/*Write a function that takes a string argument consisting of a first name, a space, 
and a last name, and returns a new string consisting of the last name, a comma, a space, and the first name.

Input: string
Output: string

Explicits: return new string w/reverse names and separate by comma and space
Implicits: 

Data structure: array, string

Algorithm:
- Start function w/string argument
  - Convert to array and save as stringArray
    - use split method with space string as separator to separate into words
  - Use reverse method on stringArray
  - Use join method on stringArray with comma space separator to convert back to string 
    - save as variable newString
  - Return newString
*/

function swapName (string) {
  let lastName = string.split(' ').reverse();
  let firstAndMiddleNames = lastName.splice(1).reverse().join(' ');
  console.log(`${lastName}, ${firstAndMiddleNames}`);
}

swapName('Joe Roberts');    // "Roberts, Joe"

swapName('Karl Oskar Henriksson Ragvals');    // "Ragvals, Karl Oskar Henriksson"