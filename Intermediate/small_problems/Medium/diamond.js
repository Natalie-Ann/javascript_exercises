let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

class Diamond {
  static makeDiamond(letter) {
    let order = Diamond.determineLetterOrder(letter);
    let width = Diamond.calculateWidth(letter);

    let rowArray = order.map(currentLetter => {
      let row = Diamond.makeARow(currentLetter);
      let paddingLength = Math.floor(width / 2) - alphabet.indexOf(currentLetter);
      let padding = ' '.repeat(paddingLength);
      return padding + row + padding;
    });
    return rowArray.join('\n') + '\n';
  }

  static determineLetterOrder(letter) {
    let order = [];
    let letterIndex = alphabet.indexOf(letter);
    for (let i = 0; i <= letterIndex; i += 1) {
      order.push(alphabet[i]);
    }
    let countdown = order.slice(0, order.length - 1).reverse();
    order.push(countdown);
    return order.flat();
  }

  static calculateWidth(letter) {
    let width = alphabet.indexOf(letter) * 2 + 1;
    return width;
  }

  static makeARow(currentLetter) {
    if (currentLetter === 'A') {
      return 'A';
    }
    if (currentLetter === 'B') {
      return 'B B';
    }

    let numberOfSpaces = 3;
    let choppedAlpha = alphabet.slice(2);
    numberOfSpaces += choppedAlpha.indexOf(currentLetter) * 2;
    return `${currentLetter}${' '.repeat(numberOfSpaces)}${currentLetter}`;
  }

}

// console.log(Diamond.makeDiamond('E'))

module.exports = Diamond;