function capitalize(names) {
  for (let index = 0; index < names.length; index++) {
    names[index] = names[index][0].toUpperCase() + names[index].slice(1);
  }
}

let practice = ["kayla", "bob", "cassie"];
capitalize(practice);
console.log(practice);
