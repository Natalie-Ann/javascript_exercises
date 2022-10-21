/*Write a function that returns the next to last word in the String passed to it as an argument.

Words are any sequence of non-blank characters.

You may assume that the input String will always contain at least two words.*/

/*
input: string (at least 2 words)
output: string (1 word)
Explicit rules: returns next to last word in string

- Create function, 1 argument string
  - split string into words (array?) using split method
  - return array[array.length-1]

*/

function penultimate (string) {
  let wordsArray = string.split(' ');
  return wordsArray[wordsArray.length-2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true