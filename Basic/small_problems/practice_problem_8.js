//Write a program that uses this array to create an object where the names are the keys and the values are the positions in the array:

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
/*let newObject = {};

for (let i = 0; i < flintstones.length; i += 1) {
  let value = i;
  let key = flintstones[value];
  newObject[key] = value;
}

console.log(newObject);

//{ Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

*/

let flintstonesObject = {};
flintstones.forEach((element, index) => {
  flintstonesObject[element] = index;
});
console.log(flintstonesObject);