//Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 120 (inclusive).

/*
Input: none
Output: string with random number
Explicit rules: random number between 20 and 120 inclusive


*/

function randomAge(min, max) {
  min = Math.ceil(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (max - min) + min)
}


function teddysAge() {
  console.log(`Teddy is ${randomAge(20, 120)} years old!`);
}

teddysAge();