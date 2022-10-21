//Can you implement a doubleNumbers function that mutates its argument?



function doubleNumbers(numbers) {
  let counter = 0;

  while (counter < numbers.length) {
    let currentNum = numbers[counter];
    numbers.splice(counter, 1, currentNum * 2);

    counter += 1;
  }

  console.log(numbers);
}

let myNumbers = [1, 4, 3, 7, 2, 6];
doubleNumbers(myNumbers);