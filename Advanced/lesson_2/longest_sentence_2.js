// Write a program that determines the sentence with the most words in some text. Sentences may end with periods (.), exclamation points (!), or question marks (?). Sentences always begin with a word character. You should treat any sequence of characters that are not spaces or sentence-ending characters, as a word. Log the longest sentence and its word count to the console. Pay attention to the expected output. Note that this problem is about manipulating and processing strings. As such, every detail about the string matters (e.g., case, punctuation, tabs, spaces, etc.).

/*
Input: string
Output: string

Explicits:  - output string contains sentence with the most words and its word count
            - sentences end with periods, exclamations, or question marks
            - sentences begin with a word character
            - word = any sequence of chars that are not spaces or sentence-ending chars
Implicits:  - punctuation (--) counts as a word
            - case insensitive

DS: strings --> arrays

Algorithm: 
- Divide the text into sentences => sentenceArray
    - Use match method to include punctuation
- Divide each sentence into words
    - Get the longest sentence from the sentenceArrays, most amount of words
        - Split(' ')
- Return the longest sentence and its word count
*/

let test = '        I am testing. I am testing again and again! I am not testing?!!';
// console.log(test.split(/([\.\?\!]){1,}?/gi));
// console.log(test.match(/\w[^.?!]*[.?!]+/gi));

function longestSentence(text) {
    let sentenceArray = text.match(/\w[^!.?]*?[.?!]+/gi);
    let wordsArray = sentenceArray.map(sentence => sentence.split(' '));
    let longestSentence = wordsArray.sort((a, b) => b.length - a.length)[0];
    
    console.log(`
    ${longestSentence.join(' ')}

    The longest sentence has ${longestSentence.length} words.`)
}

longestSentence(test);


let longText = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced. It is rather for' +
  ' us to be here dedicated to the great task remaining' +
  ' before us -- that from these honored dead we take' +
  ' increased devotion to that cause for which they gave' +
  ' the last full measure of devotion -- that we here highly' +
  ' resolve that these dead shall not have died in vain' +
  ' -- that this nation, under God, shall have a new birth' +
  ' of freedom -- and that government of the people, by' +
  ' the people, for the people, shall not perish from the' +
  ' earth.';


// longestSentence(longText);

// // console output
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.

// The longest sentence has 86 words.


// // Assuming the last sentence is removed:

// longestSentence(longText);

// // console output
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.

// The longest sentence has 30 words.