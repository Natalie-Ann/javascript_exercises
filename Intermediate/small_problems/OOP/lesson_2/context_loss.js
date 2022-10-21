// let turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription() {
//       return this.firstName + ' ' + this.lastName + ' is a '
//                                   + this.occupation + '.';
//   }
// };

// function logReturnVal(func) {
//   let returnVal = func();
//   console.log(returnVal);
// }



// let turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription() {
//       return this.firstName + ' ' + this.lastName + ' is a '
//                                   + this.occupation + '.';
//   }
// };

// function logReturnVal(func, context) {
//   let returnVal = func.call(context);
//   console.log(returnVal);
// }

// logReturnVal(turk.getDescription, turk);

let logResult = function(func) {
  let result = func();
  console.log(result);
  return result;
};

let foo = function() {
  let self = this;
  let sue = {
    name: 'Sue Perkins',
    age: 37,
    myAge() {
      return `${self.name} is ${self.age} years old.`;
    },
  };
  logResult(sue.myAge);
};

foo();