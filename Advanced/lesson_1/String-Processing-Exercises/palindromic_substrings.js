// Write a function that returns a list of all substrings of a string that are palindromic. 
// That is, each substring must consist of the same sequence of characters forwards as backwards. 
// The substrings in the returned list should be sorted by their order of appearance in the input string. 
// Duplicate substrings should be included multiple times.

// You may (and should) use the substrings function you wrote in the previous exercise.

// For the purpose of this exercise, you should consider all characters and pay attention to case; that is, 
// 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are not palindromes.

/*
Input: string
Output: array

Explicits:  - output array contains all substrings that are palindromes
                - palindrome = same sequenceof chars forwards and backwards
            - substrings should be in order of appearance in input string
            - include duplicate substrings multiple times
            - use prev. functions
            - case sensitive
            - single chars not palindromes
Implicits:  - if all chars are different, no palindromes, return empty array
            - include non-alpha chars as part of palindromes

DS: string --> array

Algorithm:
- Find all substring
- Filter all substrings for palindromes
    - if single letter, not a palindrome
    - if forward = reversed, then is a palindrome
- Return the palindromes
*/

function leadingSubstrings(string) {
    let array = [];
    for (let i = 0; i < string.length; i += 1) {
        array.push(string.slice(0, i + 1));
    }
    return array;
}

function substrings(string) {
    let allSubstrings = [];
    for (let i = 0; i < string.length; i += 1) {
        let stringSlice = string.slice(i);
        allSubstrings.push(leadingSubstrings(stringSlice));
    }
    return allSubstrings.flat();
}

function palindromes(string) {
    let allSubstrings = substrings(string);
    let palindromes = allSubstrings.filter(substring => {
        return (substring.length > 1) && ([...substring].join('') === [...substring].reverse().join('')) 
    });
    return palindromes;
}



palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
