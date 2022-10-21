//Compute and display the total age of the male members of the family.

/*
Input: object
Output: number

Explicits:  - output is the total age of the male members of family
Implicits: ?

Data Structure: object --> select for male gender --> compute sum of ages

Algorithm:
  - Start function with object parameter
  - Declare variable sum and initialize to number 0
    - Iterate through the object
      - if the gender is male, add age value to sum
      - otherwise, continue iteration
  - Return sum
*/

function sumMaleAges(object) {
  let sum = 0;
  for (let name in object) {
    if (object[name]['gender'] === 'male') {
      sum += object[name]['age'];
    } else continue;
  }
  return sum;
}

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

console.log(sumMaleAges(munsters));
