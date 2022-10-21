function getName(prompt) {
let rlSync = require('readline-sync');
let name = rlSync.question(prompt);
return name;
}

let name1 = getName("What is your first name? ");
let name2 = getName("What is your last name? ");
console.log(`Hello, ${name1} ${name2}!`);
