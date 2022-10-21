// Write code that does the reverse, starting from a nested array of pairs and building an object.

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

let builtObject = Object.fromEntries(nestedArray);
console.log(builtObject);


// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }