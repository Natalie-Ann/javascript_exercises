//Given the following data structure, write some code that returns an object 
//where the key is the first item in each subarray, and the value is the second.

let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];
//console.log(Object.fromEntries(arr));

let object = {};
arr.forEach(subArray => {
  let key = subArray[0];
  let value = subArray[1];
  object[key] = value;
})
console.log(object);

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }