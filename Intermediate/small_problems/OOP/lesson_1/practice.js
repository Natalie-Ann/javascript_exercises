// let proto = {a: 1, b: 2, c: 3, d: 4};
// let newObject = Object.create(proto);
// console.log(proto.__proto__ === Object.prototype);
// console.log(newObject.__proto__ === proto);

// foo = 1;
// console.log(global.foo);

// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     function bar() {
//       console.log(this.a + ' ' + this.b);
//     }
//     bar.call(obj);
//   },
// };

// obj.foo();   

// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.started = false;
//   this.start = function () {
//     this.started = true;
//   };
  
//   this.stop  = function () {
//     this.started = false;
//   };
// }

// let DogPrototype = {
//   bark() {
//     console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
//   }
// };

// function Dog(name, breed, weight) {
//   // Object.setPrototypeOf(this, DogPrototype);
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
//   }

// Dog.species = 'canis';

// Dog.prototype.bark = function () {
//     console.log(this.weight > 20 ? 'Woof' : 'Yip!');
// };

// // let corolla = new Car('Toyota', 'Corolla', 2016);
// // // console.log(corolla);
// // // console.log(corolla.__proto__ === Car.prototype);
// // // console.log(Car.__proto__ === Function.prototype);
// // console.log(corolla.constructor);
// // console.log(corolla instanceof Car);
// // console.log()
// // let leaf = new Car('Nissan', 'LEAF', 2018);
// // let nova = new Car('Chevrolet', 'Nova', 1974);



// let exampleDog = new Dog('Fido', 'Poodle', 90);
// // console.log(Dog.prototype.constructor);
// // console.log(exampleDog.constructor);
// console.log(Dog.species);


// let foo = {
//   bar: function() {
//     console.log(this);
//   }
// };

// foo.bar();


// let newArray = new Array(3).fill(3);
// console.log(newArray);

let example = Array.from({0: 'a', 1: 'b', 2: 'c', length: 4});
console.log(example);
