// Refactor these classes so they all use a common superclass, and inherit behavior as needed.


// class Car {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }

//   getWheels() {
//     return 4;
//   }

//   info() {
//     return `${this.make} ${this.model}`
//   }
// }

// class Motorcycle {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }

//   getWheels() {
//     return 2;
//   }

//   info() {
//     return `${this.make} ${this.model}`
//   }
// }

// class Truck {
//   constructor(make, model, payload) {
//     this.make = make;
//     this.model = model;
//     this.payload = payload;
//   }

//   getWheels() {
//     return 6;
//   }

//   info() {
//     return `${this.make} ${this.model}`
//   }
// }


class Vehicles {
  constructor(make, model, wheels) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }
  info() {
    return `${this.make} ${this.model}`;
  }
  getWheels() {
    return this.wheels;
  }
}

class Car extends Vehicles {
  constructor(make, model) {
    super(make, model, 4);
  }
}

class Motorcycle extends Vehicles {
  constructor(make, model) {
    super(make, model, 2);
  }
}

class Truck extends Vehicles {
  constructor(make, model, payload) {
    super(make, model, 6);
    this.payload = payload;
  }
}