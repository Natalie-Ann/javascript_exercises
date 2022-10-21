// Implement a function that takes a string as an argument and returns a new string that contains the original string in reverse.


function reverse(string) {
    // console.log(string.split('').reverse().join(''));
    let newString = string.split('').reduceRight((accum, currentChar) => {
        accum += currentChar;
        return accum;
    }, '');
    console.log(newString);
  }
  
  reverse('hello');                  // returns "olleh"
  reverse('The quick brown fox');    // returns "xof nworb kciuq ehT"