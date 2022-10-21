// Write a program that will take a string of digits and return all the possible consecutive number series of a specified length in that string.

// For example, the string "01234" has the following 3-digit series:

// 012
// 123
// 234
// Likewise, here are the 4-digit series:

// 0123
// 1234
// Finally, if you ask for a 6-digit series from a 5-digit string, you should throw an error.


// let series = new Series('01234');
//     expect(series.slices(1)).toEqual([[0], [1], [2], [3], [4]]);

class Series {
  constructor(string) {
    this.string = string;
  }
  
  slices(number) {
    let newArray = [];
    let stringArray = this.string.split('');
    if (number > this.string.length) {
      throw Error('slice too big');
    }
    if (number === 1) {
       stringArray.forEach(char => {
         newArray.push([Number(char)]);
      });
    }
    if (number === 2) {
      stringArray.forEach((char, index, array) => {
        newArray.push([Number(char), Number(array[index + 1])]);
      });
    }
    if (number === 3) {
      stringArray.forEach((char, index, array) => {
        newArray.push([Number(char), Number(array[index + 1]), Number(array[index + 2])]);
      });
    }
    if (number === 4) {
      stringArray.forEach((char, index, array) => {
        newArray.push([Number(char), Number(array[index + 1]), Number(array[index + 2]), Number(array[index + 3])]);
      });
    }
    if (number === 5) {
      stringArray.forEach((char, index, array) => {
        newArray.push([Number(char), Number(array[index + 1]), Number(array[index + 2]), Number(array[index + 3]), Number(array[index + 4])]);
      });
    }
   newArray = newArray.filter(subArray => !(subArray.includes(NaN)));
   return newArray;
  }
}

// let series = new Series('01234');
// console.log(series.slices(2));

module.exports = Series;