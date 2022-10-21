// Write a program that manages robot factory settings.

// When robots come off the factory floor, they have no name. The first time you boot them up, a random name is generated, such as RX837 or BC811.

// Every once in a while, we need to reset a robot to its factory settings, which means that their name gets wiped. 
// The next time you ask, it will respond with a new random name.

// The names must be random; they should not follow a predictable sequence. 
// Random names means there is a risk of collisions. Your solution should not allow the use of the same name twice when avoidable.

// You must install the NPM package named seedrandom for these tests. Require and use seedrandom exactly as shown. 
// This will override the built-in Math.random method so that it generates numbers that appear random in a predictable sequence. 
// We need this feature to test certain aspects of the robot name generation.

'use strict';

class Robot {
  constructor() {
    this.robotName = '';
  }
  
  name() {
    if (this.robotName) {
      return this.robotName;
    }
      let robotName = randomNameGenerator();
      while (Robot.namesList.includes(robotName)) {
        robotName = randomNameGenerator();
      }
      this.robotName = robotName;
      Robot.namesList.push(robotName);
      return robotName;
  }
  
  reset() {
    let index = Robot.namesList.indexOf(this.robotName);
    Robot.namesList.splice(index, 1);
    this.robotName = randomNameGenerator();
    while (Robot.namesList.includes(this.robotName)) {
      this.robotName = randomNameGenerator();
    }
    Robot.namesList.push(this.robotName);
  }
  
  static namesList = []
  
}

function randomNameGenerator() {
  let letters = generateRandomLetters();
  let numbers = generateRandomNumbers();
  return letters + numbers;
}

function generateRandomLetters() {
  let alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let letter1 = alpha[getRandomIntInclusive(0, 25)];
  let letter2 = alpha[getRandomIntInclusive(0, 25)];
  return letter1 + letter2;
}

function generateRandomNumbers() {
  let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let num1 = numbers[getRandomIntInclusive(0,9)];
  let num2 = numbers[getRandomIntInclusive(0,9)];
  let num3 = numbers[getRandomIntInclusive(0,9)];
  return num1 + num2 + num3;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

// let example = new Robot();
// console.log(example.name());
// console.log(Robot.namesList);

module.exports = Robot;