//Given the following data structure, use the map method to return a new array identical in structure to the original but, 
//with each number incremented by 1. Do not modify the original data structure.


let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

/*
Array.from(arr, object => {
  let newObject = {};
  for (let property in object) {
    let value = object[property];
    newObject[property] = value + 1;
  }
  return newObject;
});

*/


console.log(arr.map(object => {
  let newObject = {};
  for (let property in object) {
    let value = object[property];
    newObject[property] = value + 1;
  }
  return newObject;
}));

console.log(arr);







