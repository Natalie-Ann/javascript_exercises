// Write a program that, given a word, computes the Scrabble score for that word.

// Letter	Value
// A, E, I, O, U, L, N, R, S, T	1
// D, G	2
// B, C, M, P	3
// F, H, V, W, Y	4
// K	5
// J, X	8
// Q, Z	10
// How to Score

// Sum the values of all the tiles used in each word. For instance, lets consider the word CABBAGE which has the following letters and point values:

// 3 points for C
// 1 point for each A (there are two)
// 3 points for B (there are two)
// 2 points for G
// 1 point for E

let letterValues = {
  'A': 1,
  'B': 3,
  'C': 3,
  'D': 2,
  'E': 1,
  'F': 4,
  'G': 2,
  'H': 4,
  'I': 1,
  'J': 8,
  'K': 5,
  'L': 1,
  'M': 3,
  'N': 1,
  'O': 1,
  'P': 3,
  'Q': 10,
  'R': 1,
  'S': 1,
  'T': 1,
  'U': 1,
  'V': 4,
  'X': 8,
  'Y': 4,
  'Z': 10
};

class Scrabble {
  constructor(word) {
    if (word) {
      this.word = word;
    }
    else {
      this.word = '';
    }
    this.characterArray = this.word.trim().toUpperCase().split('');
  }
  
  score() {
    let score = [];
    this.characterArray.forEach(character => {
      score.push(letterValues[character]);
    });
    score = score.reduce((accum, currentValue) => accum + currentValue, 0);
    return score;
  }
  
  static score(word) {
    let lookup = new Scrabble(word);
    return lookup.score();
  }
}

module.exports = Scrabble;