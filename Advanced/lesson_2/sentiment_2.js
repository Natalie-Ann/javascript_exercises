// There are many ways to implement sentiment analysis. Here, we will use two arrays of words. One array contains words that connote a "positive" sentiment, while the other contains words that connote a "negative" sentiment. Given the counts of positive and negative words in our text, we can compute a sentiment score as the difference between the two counts, "positive word count - negative word count." The sentiment of the text is positive if the difference is positive, negative if the difference is negative, and neutral if the difference is 0 (the word counts are equal).

// Implement a function that takes some text as an argument and logs some information about whether the text has a positive, negative, or neutral sentiment.

/*
Input: string, representing the text we are analyzing
Output: string noting the number of words for positive/negative sentiment, listing those words, and then the overall sentiment

Explicits:  - sentiment = # of pos words - # of neg words
            - if sentiment is 0, overall sentiment is neutral
Implicits:  - Does case matter? no
            - Does it have to be the exact word? no
            - punctuation looks ignored

DS: arrays

Algorithm:
- Split the text into words -- wordArray,spaces as the separator
- Create a positiveCountObject {'fortune': 2, ...}
- Create a negativeCountObject
- Iterate through the wordArray
    - For the length of the positiveWords array, check if the postivie word includes the word from the wordArray lowercased
        - if the word exists in the positiveCountObject, add 1
        - else set to 1
    - 
        - if the word exists in the negativeCountObject, add 1
        - else set to 1
- Get the values for positiveCountObject and sum --> reduce method
- Get the values for the negativeCountObject and sum --> reduce method
- Subtract the two to get the overallSentiment
- Log the results
    - Number of positive words
    - A list of the positive words --> Get the properties from the positiveCountObject (Object.keys())
        - log each key in a string --> join method 
    - A list of the negative words --> extract from negCountObject --> join
    - Log the overallSentiment
*/

// function sentiment(text) {
//     let wordList = text.toLowerCase().match(/[a-z']+/g);
//     let positives = wordList.filter(word => positiveWords.includes(word));
//     let positiveCount = positives.length;
//     let positivesIncluded = positives.join(', ');

//     let negatives = wordList.filter(word => negativeWords.includes(word));
//     let negativeCount = negatives.length;
//     let negativesIncluded = negatives.join(', ');

//     let overallSentiment = 'Neutral';
//     if (positiveCount - negativeCount > 0) {
//         overallSentiment = 'Positive'
//     } else if (positiveCount - negativeCount < 0) {
//         overallSentiment = 'Negative';
//     }

//     console.log(`There are ${positiveCount} positive words in the text.
//     Positive sentiments: ${positivesIncluded}
    
//     There are ${negativeCount} negative words in the text.
//     Negative sentiments: ${negativesIncluded}
    
//     The overall sentiment is ${overallSentiment}`);

// }
let positiveRegex = /\bfortunes?\b|\bdream(s|t|ed)?\b|love(s|d)?\b|respect(s|ed)?\b|\bpatien(ce|t)?\b|\bdevout(ly)?\b|\bnobler?\b|\bresolut(e|ion)?\b/gi;
let negativeRegex = /\bdie(s|d)?\b|\bheartached?\b|death|despise(s|d)?\b|\bscorn(s|ed)?\b|\bweary\b|\btroubles?\b|\boppress(es|ed|or('s)?)?\b/gi;

function sentiment(text) {
    let positiveMatches = text.match(positiveRegex);
    let negativeMatches = text.match(negativeRegex);

    let positiveWords = positiveMatches.join(', ');
    let negativeWords = negativeMatches.join(', ');

    let overallSentiment = '';
    if (positiveMatches.length > negativeMatches.length) {
        overallSentiment = 'Positive';
    } else if (negativeMatches.length > positiveMatches.length) {
        overallSentiment = 'Negative';
    } else {
        overallSentiment = 'Neutral';
    }

    console.log(`There are ${positiveMatches.length} positive type matches in the text.
    Positive words: ${positiveWords}
    
    There are ${negativeMatches.length} negative type matches in the text.
    Negative words: ${negativeWords}
    
    The overall sentiment is ${overallSentiment}`);
  }
let textExcerpt = 'To be or not to be-that is the question:\n' +
  'Whether \'tis nobler in the mind to suffer\n' +
  'The slings and arrows of outrageous fortune,\n' +
  'Or to take arms against a sea of troubles,\n' +
  'And, by opposing, end them. To die, to sleep-\n' +
  'No more-and by a sleep to say we end\n' +
  'The heartache and the thousand natural shocks\n' +
  'That flesh is heir to-\'tis a consummation\n' +
  'Devoutly to be wished. To die, to sleep-\n' +
  'To sleep, perchance to dream. Aye, there\'s the rub,\n' +
  'For in that sleep of death what dreams may come,\n' +
  'When we have shuffled off this mortal coil,\n' +
  'Must give us pause. There\'s the respect\n' +
  'That makes calamity of so long life.\n' +
  'For who would bear the whips and scorns of time,\n' +
  'Th\' oppressor\'s wrong, the proud man\'s contumely, [F: poor]\n' +
  'The pangs of despised love, the law’s delay, [F: disprized]\n' +
  'The insolence of office, and the spurns\n' +
  'That patient merit of the unworthy takes,\n' +
  'When he himself might his quietus make\n' +
  'With a bare bodkin? Who would fardels bear, [F: these Fardels]\n' +
  'To grunt and sweat under a weary life,\n' +
  'But that the dread of something after death,\n' +
  'The undiscovered country from whose bourn\n' +
  'No traveler returns, puzzles the will\n' +
  'And makes us rather bear those ills we have\n' +
  'Than fly to others that we know not of?\n' +
  'Thus conscience does make cowards of us all,\n' +
  'And thus the native hue of resolution\n' +
  'Is sicklied o\'er with the pale cast of thought,\n' +
  'And enterprises of great pitch and moment, [F: pith]\n' +
  'With this regard their currents turn awry, [F: away]\n' +
  'And lose the name of action.-Soft you now,\n' +
  'The fair Ophelia.-Nymph, in thy orisons\n' +
  'Be all my sins remembered';

let positiveWords = ['fortune', 'dream', 'love', 'respect', 'patience', 'devout', 'noble', 'resolution'];
let negativeWords = ['die', 'heartache', 'death', 'despise', 'scorn', 'weary', 'trouble', 'oppress'];



sentiment(textExcerpt);

// console output

// There are 5 positive words in the text.
// Positive sentiments: fortune, dream, respect, love, resolution

// There are 6 negative words in the text.
// Negative sentiments: die, heartache, die, death, weary, death

// The sentiment of the text is Negative.


// There are 9 positive type words in the text.
// Positive sentiments: nobler, fortune, devoutly, dream, dreams, respect, love, patient, resolution

// There are 10 negative type words in the text.
// Negative sentiments: troubles, die, heartache, die, death, scorns, oppressor's, despised, weary, death

// The sentiment of the text is Negative.