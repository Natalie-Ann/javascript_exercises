//Return a new string that swaps the case of all of the letters:

let munstersDescription = "The Munsters are creepy and spooky.";

function changeCase (string) {
let swapped = string.slice().split('');
  for (let i = 0; i < swapped.length; i += 1) {
    if (swapped[i] === swapped[i].toUpperCase()) {
      swapped[i] = swapped[i].toLowerCase();
      console.log(swapped[i]);
    } else {
      swapped[i] = swapped[i].toUpperCase();
    }
  } 
  return swapped.join('');
}

console.log(changeCase(munstersDescription));


