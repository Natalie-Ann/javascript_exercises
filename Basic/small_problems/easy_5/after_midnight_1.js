/*
The time of day can be represented as the number of minutes before or after midnight. 
If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). 
Your function should work with any integer input.

You may not use javascript's Date class methods.

Input: number
Output: string

Explicits:  - output string is the time in 24 hour formate (hh:mm)
            - negative input number results in time before midnight
            - positive input number results in time after midnight
Implicits:  - midnight = 00:00
            - highest format = 23:59, lowest = 0:00
            - negative means you count backwards
            - 1440 minutes in 1 day
            - 
            - 
Algorithm:
- Start a function with a minutes parameter
  - Declare a vairable hours initialized at minutes/60
  - Declare a variable day initialized at hours/24
  
Convert minutes to hours

*/

function timeOfDay(minutes) {
  let hours = minutes/60;
  let remainder = hours % 24;

  if (minutes >= 0) {
    let timeInHours = String(Math.trunc(remainder));
    if (timeInHours.length < 2) {
      timeInHours = '0' + timeInHours;
    }
    let timeInMinutes = String(parseInt((remainder - timeInHours)* 60, 10));
    if (timeInMinutes.length < 2) {
      timeInMinutes = '0' + timeInMinutes;
    }
    return `${timeInHours}:${timeInMinutes}`;
    
  } else {
    let timeInHours = String(parseInt(remainder + 24), 10);
    if (timeInHours.length < 2) {
      timeInHours = '0' + timeInHours;
    }
    let timeInMinutes = String(parseInt((60 - (Math.abs(remainder + Math.trunc(Math.abs(remainder))) * 60))));
    if (timeInMinutes.length < 2) {
      timeInMinutes = '0' + timeInMinutes;
    }
    return `${timeInHours}:${timeInMinutes}`;
  }
}

// -23 - -23

console.log(timeOfDay(0)); // === "00:00");
console.log(timeOfDay(-3)); //=== "23:57");
console.log(timeOfDay(35)); // === "00:35");
console.log(timeOfDay(-1437)); // === "00:03");
console.log(timeOfDay(3000)); //=== '02:00'
console.log(timeOfDay(800)); // === "13:20");
console.log(timeOfDay(-4231)); // === "01:29");