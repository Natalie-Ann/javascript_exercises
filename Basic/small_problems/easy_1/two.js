
let str1 = "Come over here!"; 
let str2 = "What's up, Doc?";

function findExclamation(string) {
  let lastElement = string.length - 1
  if (string[lastElement] === '!') {
    console.log(true);
  } else {
    console.log(false);
  }
}

findExclamation(str1);
findExclamation(str2);