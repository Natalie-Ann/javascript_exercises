function stringToSignedInteger(string) {
  let operator = string[0];
  if (operator === '-' || operator === '+') {
    string = string.slice(1);
  }
  let characterArray = string.split('');
  let numbersObject = {0: 0, 1: 1, 2: 2, 3: 3, 4:4, 5:5, 6:6, 7: 7, 8: 8, 9:9, 10:10};
  let numbersArray = characterArray.map(char => char = numbersObject[char]);
  let numberValue = numbersArray.reduce((accumulator, currentValue) => (accumulator * 10) + currentValue);
  if (operator === '-') return numberValue * -1;
  return numberValue;
}

console.log(stringToSignedInteger("4321"));
console.log(stringToSignedInteger("-570"));
console.log(stringToSignedInteger("+100"));


console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true