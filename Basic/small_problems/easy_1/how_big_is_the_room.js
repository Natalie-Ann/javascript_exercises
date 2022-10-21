/*
Build a program that asks the user to enter the length and width of a room in meters, 
and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

*/

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=>${message}`);
}

prompt("What measurement unit will you be using (meters or feet)?");
let unit = readline.question();

prompt("What is the length of the room in meters?");
let length = readline.question();

prompt("What is the width of the room in meters?");
let width = readline.question();

function logArea (length, width) {
  if (unit === 'meters') {
    let areaMeters = length * width;
    let areaFeet = (areaMeters * 10.7639).toFixed(2);
    console.log(`The area of the room is ${areaMeters} meters squared (${areaFeet} square feet).`);
  } else if (unit === 'feet') {
    let areaFeet = length * width;
    let areaMeters = (areaFeet / 10.7639);
    console.log(`The area of the room is ${areaFeet} feet squared (${areaMeters} meters squared).`);
  } else {
    console.log("You didn't enter a valid unit.");
  }
}

logArea(length, width);