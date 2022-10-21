function greet (languageCode) {
  switch (languageCode) {
    case 'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
  }
}

function extractLanguage(locale) {
  return locale.split('_')[0];
}

function extractRegion(locale) {
  return locale.split('.')[0]
               .split('_')[1];
}

function localGreet(locale) {
  let language = extractLanguage(locale);
  let region = extractRegion(locale);

  switch (region) {
    case 'US': return 'Hey!';
    case 'GB': return 'Hello!';
    case 'AU': return 'Howdy!';
    default: return greet (language);
  }
}

console.log(localGreet('en_US.UTF-8'));
console.log(localGreet('fr_FR.UTF-8')); 
console.log(localGreet('fr_CA.UTF-8')); 
console.log(localGreet('fr_MA.UTF-8')); 