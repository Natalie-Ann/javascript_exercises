/*Write a function that determines and returns the UTF-16 string value of a string passed in as an argument. 
The UTF-16 string value is the sum of the UTF-16 values of every character in the string. 
(You may use String.prototype.charCodeAt() to determine the UTF-16 value of a character.) */

function utf16Value(string) {
  let stringArray = [];
  for (let i = 0; i <= string.length-1; i += 1) {
    let utfCharacterValue = string.charCodeAt(i);
    stringArray.push(utfCharacterValue);
  }
  let total = stringArray.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
  }, 0);
  console.log(total);
}


utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0