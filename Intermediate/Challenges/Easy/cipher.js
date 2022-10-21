let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let reversedAlphabet = alphabet.split('').reverse().join('');

function cipher(string) {
  let stringArray = string.toLowerCase().replaceAll(' ', '').split('');
  let originalPosition = stringArray.map(character => {
    if (character.match(/[0-9]/)) {
      return String(character);
    }
    return alphabet.indexOf(character);
  });
  let newString = originalPosition.map(index => {
    if (typeof index === 'string') {
      return index;
    }
    return reversedAlphabet[index];
  }).join('');
  if (newString.length > 5) {
    let divisionsOfFive = newString.match(/.{1,5}/g);
    return divisionsOfFive.join(' ');
  }
  return newString;
}

module.exports = cipher;