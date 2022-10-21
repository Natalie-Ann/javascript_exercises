// A collection of spelling blocks has two letters per block, as shown in this list:

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M

// This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

// Write a function that takes a word string as an argument, and returns true if the word can be spelled using the set of blocks, or false otherwise. You can consider the letters to be case-insensitive when you apply the rules.

/*
Input: string
Output: boolean

Explicits:  - Output returns true if the string can be spelled using the blocks
            - Each block has 2 letters/block; only one letter can be used/block
            - Can only use each block one time
            - Case insensitive
Implicits:  - Will the input always be a string?
            - Will there be non-alpha characters? If yes, should they be ignored?
            - What will empty string return?
            - Can there be multiple words in a string? 

DS: arrays

Algorithm:
- Create a block array, with each element as a block ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM']
- Capitalize the input string --> toUpperCase()
- Split the input string into characters, charArray--> split('')
- Iterate through the charArray --> every method
    - For each letter, find out if the block with that letter is available --> for each letter, iterate through the block array, find the block that includes the character using findIndex method and includes method
            - .findIndex(block => block.includes(char)) returns the index
        - if it is available (index !== -1), remove that block from the block array (splice), and return true
        - if not available, return false
- Return the result of the above iteration
*/




function isBlockWord(string) {
    let charArray = string.toUpperCase().split('');
    return (isEveryBlockAvailable(charArray));
}

function isEveryBlockAvailable(charArray) {
    let blockArray = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];
    let result = charArray.every(letter => {
        let blockIndex = blockArray.findIndex(block => block.includes(letter));
        if (blockIndex !== -1) {
            blockArray.splice(blockIndex, 1);
        } else {
            return false;
        }
        return true;
    });
    return result;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true