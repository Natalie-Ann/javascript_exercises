// Write a function that implements the Caesar Cipher. The Caesar Cipher is one of the earliest and simplest ways to encrypt plaintext 
// so that a message can be transmitted securely. 
// It is a substitution cipher in which each letter in a plaintext is substituted by the letter located a given number of positions away in the alphabet. 
// For example, if the letter 'A' is right-shifted by 3 positions, it will be substituted with the letter 'D'. 
// This shift value is often referred to as the key. The "encrypted plaintext" (ciphertext) can be decoded using this key value.

// The Caesar Cipher only encrypts letters (including both lower and upper case). Any other character is left as is. 
// The substituted letters are in the same letter case as the original letter. If the key value for shifting exceeds the length of the alphabet, 
// it wraps around from the beginning.

/*
Input: string representing letter, number(key) representing positions away from input letter
Output: string representing output letter that stands for the input letter

Explicits:  - include upper and lowercase letters
            - substituted letter are same case as original letter
            - non alpha letters are skipped
            - if key value (input number) > 26, start from beginning again
Implicits:  - if key value > 26, shift the remainder of key % 26
            - keep nonalphas intact

DS: array --> string

ReferenceObject
{A: 1, B: 2, C: 3, D: 4}

ShiftedKeyObject:
{A: 1 + key, B: 2 + key, ...}

Algorithm:
- Create a reference object
- Create a shiftedKeyObject
    - If key > 26, reassign key to key % 26
    -  For each value in referenceObject, add key
- Split string into an array of characters, charArray
- Iterate through the charArray, map new array
    - If char is alpha
        - if lowercase
            - look up the uppercase in the shiftedKeyObject and return that character lowercased
        - else
            - return the shiftedKeyObject character
    - Else continue to next character
- Join the newArray
*/

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
    console.log(newArray.join(''));
}

// // simple shift
caesarEncrypt('A', 0);       // "A"
caesarEncrypt('A', 3);       // "D"

// // wrap around
caesarEncrypt('y', 5);       // "d"
caesarEncrypt('a', 47);      // "v"

// // all letters
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// // "ZABCDEFGHIJKLMNOPQRSTUVWXY"
caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// // "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// // many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// // "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"