// // write a method that changes dates in the format 2016-06-17 or 2016/06/17 to the format 17.06.2016. 
// // You must use a regular expression and should use methods described in this section.

// let formatDate = function (originalDate) {
//     console.log(originalDate.replace(/^(\d{4})-(\d{2})-(\d{2})$/, '$3.$2.$1').replace(/^(\d{4})\/(\d{2})\/(\d{2})$/, '$3.$2.$1'));
//   };
  

// formatDate('2016-06-17'); // -> '17.06.2016'
// formatDate('2017/05/03'); // -> '03.05.2017'
// formatDate('2015/01-31'); // -> '2015/01-31' (no change)



// let text = 'The quick brown fox jumps over the lazy dog.';
// let textArray = text.replace(/[^a-z ]/ig, '');
// console.log(textArray);


let regexp = /test/g;
let str = 'test1test2';
let array = str.match(regexp);
// let array2 = [...str.matchAll(regexp)];
let matchObject = str.matchAll(regexp);

for (let prop in matchObject) {
  console.log(matchObject[prop], matchObject[prop].index);
}

// const regexp = new RegExp('foo[a-z]*','g');
// const str = 'table football, foosball';
// const matches = str.matchAll(regexp);

// for (const match of matches) {
//   console.log(`Found ${match[0]} start=${match.index} end=${match.index + match[0].length}.`);
// }


let text = 'testing.  and testing. test.!';
console.log(text.split(' '));
console.log(text.split(/\s+/g));
console.log(text.match(/\S+/));
console.log(text.match(/\S+/g));