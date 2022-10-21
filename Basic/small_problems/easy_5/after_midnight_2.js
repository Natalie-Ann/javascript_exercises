/*
As seen in the previous exercise, the time of day can be represented as the number of minutes before or after midnight. 
If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

Write two functions that each take a time of day in 24 hour format, and return the number of minutes before and after midnight, 
respectively. Both functions should return a value in the range 0..1439.

You may not use javascript's Date class methods.

Input: string representing time in 24 hours
Output: number representing minutes before or after midnight

Algorithm (after midnight):
  - Start a function with string parameter
    - Declare a variable MINUTES_PER_HOUR initialize at 60
    - Declare a variable HOURS_PER_DAY and initialize at 24
    - Declare a variable MINUTES_PER_DAY and initializ at MINUTES_PER_HOUR * HOURS_PER_DAY
    - Convert the string into an array separated by colon
    [00, 00]
    [12, 34]
    [24:00]
    - if first element is 00 and next element is 00 or if first element is 24, return 0
    - first element multiply by MINUTES PER HOUR and add to the second element
    
Algorithm (before midnight):
- Same as above until get to array separation
- 
    



*/
let MINUTES_PER_HOUR = 60;
let HOURS_PER_DAY = 24;
let MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;

function afterMidnight(string) {
  let stringArray = string.split(':');
  console.log(stringArray);
  if (stringArray[0] === '00' && stringArray[1] === '00') return 0;
  if (stringArray[0] === '24') return 0;
  
  return stringArray[0]*MINUTES_PER_HOUR + Number(stringArray[1]);
  
}


function beforeMidnight(string) {
  let stringArray = string.split(':');
  if (stringArray[0] === '00' && stringArray[1] === '00') return 0;
  if (stringArray[0] === '24') return 0;
  
  return stringArray[0]*MINUTES_PER_HOUR - Number(stringArray[1]);
  
}
console.log(afterMidnight("00:00")); //=== 0);
console.log(beforeMidnight("00:00")); //=== 0);
console.log(afterMidnight("12:34"));//=== 754);
console.log(beforeMidnight("12:34")); //=== 686);
console.log(afterMidnight("24:00"));//=== 0);
console.log(beforeMidnight("24:00")); //=== 0);


