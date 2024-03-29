// Implement octal to decimal conversion. Given an octal input string, your program should produce a decimal output. Treat invalid input as octal 0.

// Note: Implement the conversion yourself. Don't use any built-in or library methods that perform the necessary conversions for you. 
// In this exercise, the code necessary to perform the conversion is what we're looking for,

// About Octal (Base-8)

// Decimal is a base-10 system. A number 233 in base 10 notation can be understood as a linear combination of powers of 10:

// The rightmost digit gets multiplied by 100 = 1
// The next digit gets multiplied by 101 = 10
// The digit after that gets multiplied by 102 = 100
// The digit after that gets multiplied by 103 = 1000
// ...
// The n*th* digit gets multiplied by 10n-1.
// All of these values are then summed.
// Thus:

// Copy Code
//   233 # decimal
// = 2*10^2 + 3*10^1 + 3*10^0
// = 2*100  + 3*10   + 3*1
// Octal numbers are similar, but they use a base-8 system. A number 233 in base 8 can be understood as a linear combination of powers of 18:

// The rightmost digit gets multiplied by 80 = 1
// The next digit gets multiplied by 81 = 8
// The digit after that gets multiplied by 82 = 64
// The digit after that gets multiplied by 83 = 512
// ...
// The n*th* digit gets multiplied by 8n-1.
// All of these values are then summed.
// Thus:

// Copy Code
//   233 # octal
// = 2*8^2 + 3*8^1 + 3*8^0
// = 2*64  + 3*8   + 3*1
// = 128   + 24    + 3
// = 155


class Octal {
  constructor(number) {
    this.number = number;
  }
  
  toDecimal() {
    let decimal = createDecimal(this.number);
    if (isNaN(decimal) || this.number.match(/[8-9]/g)) {
      return 0;
    }
    return decimal;
  }
}

function createDecimal(string) {
  let digitArray = string.split('');
  let decimalDigits = digitArray.map((digit, index) => {
    let length = digitArray.length - 1;
    return digit * (8**(length - index));
  });
  return decimalDigits.reduce((accum, current) => accum + current, 0);
}

module.exports = Octal;