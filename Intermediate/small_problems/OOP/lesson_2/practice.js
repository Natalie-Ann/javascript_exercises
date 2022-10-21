// let object = {};
// // console.log(Object['prototype'].isPrototypeOf(object));

// console.log(Object.getPrototypeOf(object));
// console.log(Object.getPrototypeOf(object) === Object.prototype);

// function foo() {
//   return this;
// }

// console.log(foo());


let obj = {
  foo() {
    return this;
  },
};

console.log(obj.foo());