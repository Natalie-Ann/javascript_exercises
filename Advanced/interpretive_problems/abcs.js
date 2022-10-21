// This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. 
// You can also only use each block once.

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M

// Write a function that takes a word string as an argument and returns true if the word can be spelled using the set of blocks, false otherwise. 
// You can consider the letters to be case-insensitive when you apply the rules.


function isBlockWord (string) {
    upperString = string.toUpperCase();
    let reference = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];
    upperString.split('').forEach(character => {
        reference.forEach((block, index) => {
            if (block.includes(character)) {
                reference.splice(index, 1);
            }
        });
    });
    return (reference.length === 13 - upperString.length);
}


isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true
isBlockWord('floW');       // true
isBlockWord('APPLE');      // false
isBlockWord('apple');      // false
isBlockWord('apPLE');      // false
isBlockWord('Box');        // false