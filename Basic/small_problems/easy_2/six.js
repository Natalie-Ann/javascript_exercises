/*
Suppose we build an array like this:

Copy Code
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);
This code will create a nested array that looks like this:

Copy Code
["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
Nesting data structures like we do here is commonplace in JavaScript and programming in general. We'll explore this in much greater depth in a future Lesson.

Create a new array that contains all of the above values, but in an un-nested format:

Copy Code
[ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]



*/


//let flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
//console.log(flintstones.flat());

//let flintstones = ["Fred", "Wilma"];
//console.log(flintstones.concat(["Barney", "Betty"], ["Bambam", "Pebbles"]));

let flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
//flintstones = [].concat(...flintstones);

//let newFlintstones = [];
//flintstones.forEach(element => newFlintstones = newFlintstones.concat(element));
//console.log(newFlintstones);

flintstones = flintstones.reduce((accum, element) => accum.concat(element), []);
console.log(flintstones);



