// Write a function that takes an ISO 639-1 language code and returns a greeting in that language. 
// You can take the examples below or add whatever languages you like.

function greet (lang) {
  switch (lang) {
    case 'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
  }
}


console.log(greet('en')); // 'Hi!'
console.log(greet('fr')); // 'Salut!'
