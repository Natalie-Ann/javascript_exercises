// Write a program that determines the sentence with the most words in some text. Sentences may end with periods (.), 
// exclamation points (!), or question marks (?). Sentences always begin with a word character. 
// You should treat any sequence of characters that are not spaces or sentence-ending characters, 
// as a word. Log the longest sentence and its word count to the console. Pay attention to the expected output. 
// Note that this problem is about manipulating and processing strings. 
// As such, every detail about the string matters (e.g., case, punctuation, tabs, spaces, etc.).

/*
Input: string
Output: string

Explicits:  - output logs the longest sentence in the input string and its word count
            - sentences end with periods, exclamations, or question marks
            - sentences start with a word character
            - word is sequence of characters that are not spaces or sentence ending characters
Implicits:  - '--' is counted as a word

DS: array?

Algorithm:
- Split sentence into words separated by spaces
- Declare variable sentenceArray
- Declare startOfSentence = 0
- Iterate through words array
  - if find a word that ends with .?!, s
  - slice the words array from startOfSentence to current index + 1
    - push the slice to the sentenceArray
  - reassign startOfSentence to current index + 1
- Iterate through sentenceArray
  - wordCount = 0
  - find length of longest sentence
    - if current length is > wordCount, reassign wordCount
- 


*/

function longestSentence(text) {
  let wordsArray = text.split(' ');
  let sentenceStartIndex = 0;
  let sentenceArray = wordsArray.reduce((accum, word, index) => {
    if (word.match(/[\.\?!]/g)) {
      accum.push(wordsArray.slice(sentenceStartIndex, index + 1));
      sentenceStartIndex = index + 1;
    }
    return accum;
  }, []);
  
  sentenceArray.sort((a, b) => b.length - a.length);
  console.log(sentenceArray[0]);
  let longestSentence = sentenceArray[0].filter(word => word !== '').join(' ');
  let longestLength = sentenceArray[0].filter(word => word !== '').length;
  
  console.log(longestSentence);
  console.log('');
  console.log(`The longest sentence has ${longestLength} words.`);
}

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


  longestSentence(longText);
  longestSentence('     I yam what I yam!'); // Expected Length: 5
  longestSentence(`What's up, "Doc"?    The brown fox is superlative!`); // Expected Length: 5
  longestSentence('    hello! This sentence does not   work.');


