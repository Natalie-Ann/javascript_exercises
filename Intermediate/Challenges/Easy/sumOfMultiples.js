// Write a program that, given a natural number and a set of one or more other numbers, can find the sum of all the multiples of the numbers 
// in the set that are less than the first number. If the set of numbers is not given, use a default set of 3 and 5.

// For instance, if we list all the natural numbers up to, but not including, 
// 20 that are multiples of either 3 or 5, we get 3, 5, 6, 9, 10, 12, 15, and 18. The sum of these multiples is 78.

'use strict';

class SumOfMultiples {
  constructor(set) {
        this.set = [...arguments];
    }
  
  to (limit) {
    let multiples = this.set.map(number => findMultiples(number, limit)).flat();
    multiples = eliminateDuplicates(multiples);
    let sum = multiples.reduce((accum, currentValue) => accum + currentValue, 0);
    return sum;
  }
  
  static to(limit) {
    let example = new SumOfMultiples(3, 5);
    return example.to(limit);
  }
  
}

function findMultiples(number, limit) {
  let multiples = [];
  for (let i = number; i < limit; i += number) {
    multiples.push(i);
  }
  return multiples;
}

function eliminateDuplicates(multiplesList) {
  let newList = multiplesList.filter((number, index, array) => array.indexOf(number) === index);
  return newList;
}

module.exports = SumOfMultiples;