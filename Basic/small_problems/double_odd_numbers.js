//uppose we wanted to transform the numbers based on their position in the array rather than their value? 
// Try coding a solution that doubles the numbers that have odd indices:


let myNumbers = [1, 4, 3, 7, 2, 6];

function doubleOddIndices(array) {
  let outputArray = array.slice();
  for (let i = 1; i < array.length; i += 2) {
    let currentNumber = array[i];
    outputArray.splice(i, 1, currentNumber * 2);
  }
  console.log(outputArray);
}

doubleOddIndices(myNumbers);  // => [1, 8, 3, 14, 2, 12]

// not mutated
console.log(myNumbers);                    // => [1, 4, 3, 7, 2, 6]