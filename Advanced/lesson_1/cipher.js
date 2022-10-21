// The Vigenere Cipher encrypts alphabetic text using polyalphabetic substitution. It uses a series of Caesar Ciphers based on the letters of a keyword. Each letter of the keyword is treated as a shift value. For instance, the letter 'B' corresponds to a shift value of 1, and the letter 'd' corresponds to a shift value of 3. In other words, the shift value used for a letter is equal to its index value in the alphabet. This means that the letters 'a'-'z' are equivalent to the numbers 0-25. The uppercase letters 'A'-'Z' are also equivalent to 0-25.

// Applying the Vigenere Cipher is done sequentially for each character by applying the current shift value to a Caesar Cipher for that particular character. To make this more concrete, let's look at the following example:

// plaintext: Pineapples don't go on pizzas!
// keyword: meat

// Applying the Vigenere Cipher for each alphabetic character:
// plaintext : Pine appl esdo ntgo onpi zzas
// shift     : meat meat meat meat meat meat
// ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

// result: Bmnxmtpeqw dhz'x gh ar pbldal!

// Notice that in the example, the key isn't moved forward if the character isn't in the alphabet. Like the Caesar Cipher, the Vigenere Cipher only encrypts alphabetic characters.

// Write a function that implements the Vigenere Cipher. The case of the keyword doesn't matter—in other words, the resulting encryption won't change depending on the case of the keyword's letters (e.g., 'MEat' === 'mEaT').

// For a quick lookup of a ciphertext per character, you may consult this tabula recta. Each row of the table corresponds to a Caesar Cipher encryption using the columns' character letter as a shift value.

/*
Input: string representing text, string representing keyword
Output: string in code (shifted string)

Explicits:  - Each letter in the keyword is treated as a shift value 'ABCDEFGHIJKLMNOPQRSTUVXYZ'
                - shift is however many time the letter gets shifted over in the alphabet
            - Ignore punctuation
            - Ignore case
Implicits:  - The length of the key string is how the input text gets split

'
DS: arrays

Algorithm:
    - Create a reference string 'ABCDEFGHIJKLMNOPQRSTUVXYZ'
    - Iterate through the input text
        - If the char is a alpha
            - Split the input text into length of keyword if they are alpha chars []
            - 

*/

const referenceAlphabet = {A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10, K: 11, L: 12, M: 13, N: 14, O: 15, P: 16, Q: 17, R: 18, S: 19,
    T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26};

function vignereEncrypt(text, stringKey) {
    let splitText = text.split(/([A-Za-z ])/g);
    let index = 0;
    let newArray = splitText.map(char => {
        if (char.match(/[A-Za-z]/g)) {
            if (index === stringKey.length) {
                index = 0;
            }
            let shiftNumber = referenceAlphabet[stringKey[index].toUpperCase()];
            if (index < stringKey.length) {
                index += 1;
            } 
            return char.replace(char, caesarEncrypt(char, shiftNumber - 1));
        } else {
            return char;
        }
    });
    console.log(newArray.join(''));
}

function caesarEncrypt(string, key) {
    let referenceAlphabet = {A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10, K: 11, L: 12, M: 13, N: 14, O: 15, P: 16, Q: 17, R: 18, S: 19,
    T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26};
    let shiftedAlphabet = Object.entries(referenceAlphabet).map(pair => {
        if ((pair[1] + key) > 26) {
            pair[1] = ((pair[1] + key) % 26) ? ((pair[1] + key) % 26) : 26;
        } else {
            pair[1] = pair[1] + key;
        }
        return [pair[0], pair[1]];
    });
    shiftedAlphabet = Object.fromEntries(shiftedAlphabet);
    let charArray = string.split('');
    let newArray = charArray.map(character => {
        if (character.match(/[a-z]/g)) {
            character = character.toUpperCase();
            let newPosition = shiftedAlphabet[character];
            character = Object.entries(referenceAlphabet).find(pair => {
                return pair[1] === newPosition;
            })[0].toLowerCase();
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
    })
    return newArray.join('');
}

vignereEncrypt('Pineapples don\'t go on pizzas!', 'meat'); //Bmnxmtpeqw dhz'x gh ar pbldal!
vignereEncrypt('Dog', 'Rabbit'); // Uoh
vignereEncrypt('Pineapples don\'t go on pizzas!', 'cab'); // Riogaqrlfu dpp't hq oo riabat!
