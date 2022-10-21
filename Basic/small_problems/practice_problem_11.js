//Create an object that expresses the frequency with which each letter occurs in this string:


let statement = "The Flintstones Rock";
let returnObject = {};
let charactersArray = statement.split('');
for (let i = 0; i < charactersArray.length; i += 1) {
  let character = charactersArray[i];
  if (character === ' ') continue;
  if (returnObject[character]) {
    returnObject[character] += 1;
  } else {
    returnObject[character] = 1;
  }
}
console.log(returnObject);

//{ T: 1, h: 1, e: 2, F: 1, l: 1, ... }