/*Write a function that takes a string argument containing one or more words and returns a new string containing the words from the string argument. 
All five-or-more letter words should have their letters in reverse order. 
The string argument will consist of only letters and spaces. Words will be separated by a single space.

Input: string
Output: string 

Explicits:  - Return 5+ letter words in reverse order; otherwise, regular order
            - string input only will have letters and spaces, words separated by spaces
Implicits:  - words are not reversed!! characters are reversed

Data Structure: string --> array with word elements (make changes) --> string

Algorithm:
  - Start function with string argument
    - Convert string to array and save to variable stringArray
      - use split method with space separator
    - Initialize a variable newArray and assign to value of empty array
    - Start a for loop
      - initialization: i = 0
      - stop condition: i < stringArray.length
      - iteration statement: i += 1
        - if (stringArray[i] >= 5) an element is greater than or equal to 5
          - stringArray[i].reverse
          - push this reversed element to newArray
        - else push element to newArray
    - Convert newArray to string
      - use join method with space separator
    - Return newArray
*/

function reverseWords (string) {
  let stringArray = string.split(' ');
  let newArray = [];
  for (let i = 0; i < stringArray.length; i += 1) {
    if (stringArray[i].length >= 5) {
      let reversedElement = stringArray[i].split('').reverse().join('');
      newArray.push(reversedElement);
    } else {
      newArray.push(stringArray[i]);
    }
  }
  console.log(newArray.join(' '));
}


reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"