//Pick out the minimum age from our current Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

//console.log(Object.values(ages).sort((a,b) => a-b)[0]);

let agesArray = Object.values(ages);
console.log(Math.min(...agesArray));
