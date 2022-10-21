const referenceAlphabet = {A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10, K: 11, L: 12, M: 13, N: 14, O: 15, P: 16, Q: 17, R: 18, S: 19,
    T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26};

function vignereEncrypt(text, stringKey) {
    let splitText = text.split(/([A-Za-z ])/g);
    let stringKeyIndex = 0;
    let newArray = splitText.map(char => {
        if (char.match(/[A-Za-z]/g)) {
            if (stringKeyIndex === stringKey.length) {
                stringKeyIndex = 0;
            }
            let shiftNumber = referenceAlphabet[stringKey[stringKeyIndex].toUpperCase()];
            if (stringKeyIndex < stringKey.length) {
                stringKeyIndex += 1;
            } 
            return char.replace(char, caesarEncrypt(char, shiftNumber - 1));
        } else {
            return char;
        }
    });
    console.log(newArray.join(''));
}


function createShiftedAlphabet(key) {
    let shiftedAlphabet = Object.entries(referenceAlphabet).map(pair => {
        [letter, number] = [pair[0], pair[1]];
        if ((number + key) > 26) {
            number = ((number + key) % 26) ? ((number + key) % 26) : 26;
        } else {
            number = number + key;
        }
        return [letter, number];
    });
    return Object.fromEntries(shiftedAlphabet);
}

function caesarEncrypt(string, key) {
    let shiftedAlphabet = createShiftedAlphabet(key);
    let charArray = string.split('');
    let newString = charArray.map(character => {
        if (character.match(/[a-z]/g)) {
            let newPosition = shiftedAlphabet[character.toUpperCase()];
            // character = Object.entries(referenceAlphabet).find(pair => {
            //     return pair[1] === newPosition;
            // })[0].toLowerCase();
            for (let letter in referenceAlphabet) {
                if (referenceAlphabet[letter] === newPosition) {
                    character = letter.toLowerCase();
                }
            }
            return character;

        } else if (character.match(/[A-Z]/g)) {
            let otherPosition = shiftedAlphabet[character];
            character = Object.entries(referenceAlphabet).find(pair => {
                return pair[1] === otherPosition
            })[0];
            return character;
        } else {
            return character;
        }
    }).join('')
    return newString;
}

// vignereEncrypt('Pineapples don\'t go on pizzas!', 'meat');
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
