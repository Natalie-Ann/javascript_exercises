let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObj(object, arrayKeys) {
  let copiedObject = {};
  Object.create(object);
  console.log(copiedObject);
}

let newObj = copyObj(objToCopy);
console.log(newObj);      