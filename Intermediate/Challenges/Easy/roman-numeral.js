// Write some code that converts modern decimal numbers into their Roman number equivalents.

// The Romans were a clever bunch. They conquered most of Europe and ruled it for hundreds of years. 
// They invented concrete and straight roads and even bikinis. One thing they never discovered though was the number zero. 
// This made writing and dating extensive histories of their exploits slightly more challenging, but the system of numbers 
// they came up with is still in use today. For example the BBC uses Roman numerals to date their programmes.

// The Romans wrote numbers using letters - I, V, X, L, C, D, M. Notice that these letters have lots of straight lines 
// and are hence easy to hack into stone tablets.

// There is no need to be able to convert numbers larger than about 3000. (The Romans themselves didn't tend to go any higher)

// Wikipedia says: Modern Roman numerals ... are written by expressing each digit separately 
// starting with the left most digit and skipping any digit with a value of zero.

// To see this in practice, consider the example of 1990. In Roman numerals, 1990 is MCMXC:

class RomanNumeral {
  constructor(number) {
    this.arrayNumber = String(number).split('');
  }
  
  toRoman() {
    // let roman = '';
    let convertionTable = {
      '1': 'I', 
      '2': 'II', 
      '3': 'III', 
      '4': 'IV', 
      '5': 'V', 
      '6': 'VI', 
      '7': 'VII', 
      '8': 'VIII', 
      '9': 'IX', 
      '10': 'X',
      '20': 'XX',
      '30': 'XXX',
      '40': 'XL',
      '50': 'L', 
      '60': 'LX',
      '70': 'LXX',
      '80': 'LXXX',
      '90': 'XC',
      '100': 'C', 
      '200': 'CC',
      '300': 'CCC',
      '400': 'CD',
      '500': 'D',
      '600': 'DC',
      '700': 'DCC',
      '800': 'DCCC',
      '900': 'CM',
      '1000': 'M',
      '2000': 'MM',
      '3000': 'MMM',
    };
    if (this.arrayNumber.length === 1) {
      return convertionTable[this.arrayNumber[0]];
    }
    if (this.arrayNumber.length === 2) {
      let tens = this.arrayNumber[0] + '0';
      let singles = this.arrayNumber[1];
      let roman = convertionTable[tens] + convertionTable[singles];
      roman = roman.replaceAll('undefined', '');
      return roman;
    }
    if (this.arrayNumber.length === 3) {
      let hundreds = this.arrayNumber[0] + '00';
      let tens = this.arrayNumber[1] + '0';
      let singles = this.arrayNumber[2];
      let roman = convertionTable[hundreds] + convertionTable[tens] + convertionTable[singles];
      roman = roman.replaceAll('undefined','');
      return roman;
    }
    if (this.arrayNumber.length === 4) {
      let thousands = this.arrayNumber[0] + '000';
      let hundreds = this.arrayNumber[1] + '00';
      let tens = this.arrayNumber[2] + '0';
      let singles = this.arrayNumber[3];
      let roman = convertionTable[thousands] + convertionTable[hundreds] + convertionTable[tens] + convertionTable[singles];
      roman = roman.replaceAll('undefined', '');
      return roman;
    }
  }
}

module.exports = RomanNumeral;