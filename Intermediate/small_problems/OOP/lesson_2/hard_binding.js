let object = {
  a: 'hello',
  b: 'world',
  foo: function() {
    return this.a + ' ' + this.b;
  },
};
let bar = object.foo;
console.log(bar());
// "undefined undefined"
// let baz = object.foo.bind(object);
// baz();   // "hello world"