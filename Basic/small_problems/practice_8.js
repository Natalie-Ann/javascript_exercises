//Using the forEach method, write some code to output all vowels from the strings in the arrays. Don't use a for or while loop.

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let vowels = 'aeiouAEIOU';
let values = Object.values(obj);
values.forEach(array => {
  array.forEach(word => {
    let characters = word.split('');
    characters.forEach(character => {
      if (vowels.includes(character)) {
        console.log(character);
      }
    })
  })
})