// Write a program that can generate the lyrics of the 99 Bottles of Beer song. See the test suite for the entire song.



class BeerSong {
  static verse(number) {
    let line = `${number} bottles of beer on the wall, ${number} bottles of beer.\nTake one down and pass it around, ${number - 1} bottles of beer on the wall.\n`;
    if (number === 2) {
      return `${number} bottles of beer on the wall, ${number} bottles of beer.\nTake one down and pass it around, ${number - 1} bottle of beer on the wall.\n`;
    }
    if (number === 1) {
      return `${number} bottle of beer on the wall, ${number} bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n`;
    }
    if (number === 0) {
      return `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n`;
    }
    return line;
  }
  
  static verses(beginVerse, endVerse) {
    let verses = BeerSong.verse(beginVerse) + '\n';
    for (let i = beginVerse - 1; i >= endVerse; i -= 1) {
      verses += BeerSong.verse(i);
      if (i > endVerse) {
        verses += '\n';
      }
    }
    return verses;
  }
  
  static lyrics() {
    return BeerSong.verses(99, 0);
  }
}

console.log(BeerSong.verses(3, 0));

module.exports = BeerSong;