// Write a program to determine whether a triangle is equilateral, isosceles, or scalene.

// An equilateral triangle has all three sides the same length.

// An isosceles triangle has exactly two sides of the same length.

// A scalene triangle has all sides of different lengths.

// Note: For a shape to be a triangle at all, all sides must be of length > 0, 
// and the sum of the lengths of any two sides must be greater than the length of the third side.

function triangleSidesAreInequal(array) {
  return array[0] + array[1] <= array[2];
}


class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.orderedSides = [side1, side2, side3].sort((a, b) => a - b);
    if (this.orderedSides[0] <= 0) {
      throw new Error('All side lengths must be greater than 0');
    }
    if (triangleSidesAreInequal(this.orderedSides)) {
      throw new Error('Sum of lengths of any two sides must be greater than third side');
    }
  }
  
  kind () {
    if (this.orderedSides.every((value, index, array) => value === array[0])) {
         return 'equilateral';
    } else if (this.orderedSides[0] === this.orderedSides[1] || this.orderedSides[1] === this.orderedSides[2]) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }
}

module.exports = Triangle;

// let exampleEquilateral = new Triangle(3, 3, 3);
// console.log(exampleEquilateral.orderedSides);
// console.log(exampleEquilateral.kind());

// let exampleIsoceles = new Triangle(10, 12, 10);
// console.log(exampleIsoceles.orderedSides);
// console.log(exampleIsoceles.kind());

// let exampleScalene = new Triangle(5, 12, 7);
// console.log(exampleScalene.orderedSides);
// console.log(exampleScalene.kind());

// let exampleBadSides = new Triangle(12, 1, 5);


// let Triangle = require('./triangle.js');

// describe("Triangle", () => {
//   test("equilateral triangles have equal sides", () => {
//     const triangle = new Triangle(2, 2, 2);
//     expect(triangle.kind()).toEqual("equilateral");
//   });

//   xtest("larger equilateral triangles also have equal sides", () => {
//     const triangle = new Triangle(10, 10, 10);
//     expect(triangle.kind()).toEqual("equilateral");
//   });

//   xtest("isosceles triangles have last two sides equal", () => {
//     const triangle = new Triangle(3, 4, 4);
//     expect(triangle.kind()).toEqual("isosceles");
//   });

//   xtest("isosceles trianges have first and last sides equal", () => {
//     const triangle = new Triangle(4, 3, 4);
//     expect(triangle.kind()).toEqual("isosceles");
//   });

//   xtest("isosceles triangles have two first sides equal", () => {
//     const triangle = new Triangle(4, 4, 3);
//     expect(triangle.kind()).toEqual("isosceles");
//   });

//   xtest("isosceles triangles have in fact exactly two sides equal", () => {
//     const triangle = new Triangle(10, 10, 2);
//     expect(triangle.kind()).toEqual("isosceles");
//   });

//   xtest("scalene triangles have no equal sides", () => {
//     const triangle = new Triangle(3, 4, 5);
//     expect(triangle.kind()).toEqual("scalene");
//   });

//   xtest("scalene triangles have no equal sides at a larger scale too", () => {
//     const triangle = new Triangle(10, 11, 12);
//     expect(triangle.kind()).toEqual("scalene");
//   });

//   xtest("scalene triangles have no equal sides in descending order either", () => {
//     const triangle = new Triangle(5, 4, 2);
//     expect(triangle.kind()).toEqual("scalene");
//   });

//   xtest("very small triangles are legal", () => {
//     const triangle = new Triangle(0.4, 0.6, 0.3);
//     expect(triangle.kind()).toEqual("scalene");
//   });

//   xtest("test triangles with no size are illegal", () => {
//     expect(() => { new Triangle(0, 0, 0) }).toThrow();
//   });

//   xtest("triangles with negative sides are illegal", () => {
//     expect(() => { new Triangle(3, 4, -5) }).toThrow();
//   });

//   xtest("triangles violating triangle inequality are illegal", () => {
//     expect(() => { new Triangle(1, 1, 3) }).toThrow();
//   });

//   xtest("triangles violating triangle inequality are illegal 2", () => {
//     expect(() => { new Triangle(7, 3, 2) }).toThrow();
//   });

//   xtest("triangles violating triangle inequality are illegal 3", () => {
//     expect(() => { new Triangle(10, 1, 3) }).toThrow();
//   });

//   xtest("triangles violating triangle inequality are illegal 4", () => {
//     expect(() => { new Triangle(1, 1, 2) }).toThrow();
//   });
// });