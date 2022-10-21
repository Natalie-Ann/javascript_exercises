//ng a function that lets you multiply every array item by a specified value. 
//As with doubleNumbers, don't mutate the array, but return a new array instead.


let myNumbers = [1, 4, 3, 7, 2, 6];

function multiply(array, multiplier) {
  let outputArray = [];
  for (let i = 0; i < array.length; i += 1) {
    outputArray.push(array[i] * multiplier);
  }
  console.log(outputArray);
}
multiply(myNumbers, 3); // => [3, 12, 9, 21, 6, 18]