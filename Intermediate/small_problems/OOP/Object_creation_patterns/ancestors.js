// Implement an ancestors method that returns the prototype chain (ancestors) of a calling object as an array of object names. 
// Here's an example output:

/*Input: method/function
Output: array containing all prototypes

Explicits: prototype chain is an array of object names
Implicits: object.protype included in all outputs, values in array are strings

Algorithm: 
  - start function 
    - earliest function just returns object.protoype
    - unshift add the name of the prototype

*/



// name property added to make objects easier to identify
let foo = {name: 'foo'};
foo.ancestors = function() {
  let ancestors = [];
  let obj = this;
  while (Object.getPrototypeOf(obj)) {
    ancestors.push((Object.getPrototypeOf(obj).name) || `Object.prototype`);
    obj = Object.getPrototypeOf(obj);
  }
  return ancestors;
};


let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']