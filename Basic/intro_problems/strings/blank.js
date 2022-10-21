// Write a function that checks whether a string is empty or not. For example:

function isBlank (string) {
  if (string === '') {
    console.log(true);
  }else{
    console.log(false);
  }
}

isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true