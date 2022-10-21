// Change your isBlank function from the previous exercise to return true if the string is empty or only contains whitespace. 
// For example:


function isBlank (string) {
  if (string.trim().length === 0) {
    console.log(true);
  }else{
    console.log(false);
  }
}

isBlank('mars'); // false
isBlank('  ');   // true
isBlank('');     // true