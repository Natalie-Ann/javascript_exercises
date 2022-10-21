//Add up all of the ages from the Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

//console.log(Object.values(ages).reduce((accumulator, currentValue) => accumulator + currentValue, 0));

/*let count = 0;
for (let prop in ages) {
  count = count + ages[prop];
}
console.log(count);
*/

let familyAges = Object.values(ages);
let count = 0;
for (let value of familyAges) {
  count = count + value;
}
console.log(count);


