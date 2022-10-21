let foo = {
  a: 0,
  incrementA: function() {
    let increment = function () {
      this.a += 1;
  }.bind(this);
  increment();
  },
};

foo.incrementA();
foo.incrementA();
foo.incrementA();

console.log(foo.a);