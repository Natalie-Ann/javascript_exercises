//Write three different ways to remove all of the elements from the following array:

let numbers = [1, 2, 3, 4];

//numbers = [];
//numbers.length = 0;
while (numbers.length > 0) {
  numbers.shift();
}
console.log(numbers);

numbers.splice(0, numbers.length);