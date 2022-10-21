class Rectangle {
  constructor (length, width) {
    this.length = length;
    this.width = width;
  }
  
  getArea () {
    return this.length * this.width;
  }
  
  toString() {
    return `[Rectangle ${this.width * this.length}]`;
  }
}

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }
  toString() {
    return `[Square] ${this.width * this.length}`;
  }
}

let square = new Square(5);
// console.log(square.toString());
console.log(square.length);
console.log(square.width);