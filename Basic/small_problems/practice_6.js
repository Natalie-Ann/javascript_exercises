/*
One of the most frequently used real-world string operations is that of "string substitution," 
where we take a hard-coded string and modify it with various parameters from our program.

Given this previously seen family object, print the name, age, and gender of each family member:

*/

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

/*
for (let name in munsters) {
  let uppercase = name.slice(0, 1).toUpperCase() + name.slice(1);
  let age = munsters[name]['age'];
  let gender = munsters[name]['gender'];
  console.log(`${uppercase} is a ${age}-year old ${gender}.`);
}
*/

Object.entries(munsters).forEach(element => {
  let name = element[0].slice(0,1).toUpperCase() + element[0].slice(1);
  let age = element[1]['age'];
  let gender = element[1]['gender'];
  console.log(`${name} is a ${age}-year old ${gender}.`);
});

//(Name) is a (age)-year-old (male or female).