class Anagram {
  constructor(word) {
    this.word = word;
    this.characterArray = this.word.toLowerCase().split('').sort();
  }

  match (array) {
    let anagramList = [];
    array.forEach(word => {
      let sortedCharacters = word.slice().toLowerCase().split('').sort();
      if (sortedCharacters.join('') === this.characterArray.join('')) {
        anagramList.push(word);
      }
    });
    return anagramList.filter(word => word.toLowerCase() !== this.word.toLowerCase());
  }
}

// let example = new Anagram('cat');
// console.log(example.word);
// console.log(example.characterArray);
// console.log(example.match(['act', 'tac']));


module.exports = Anagram;