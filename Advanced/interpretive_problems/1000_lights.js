// You have a bank of switches before you, numbered from 1 to n. Every switch is connected to exactly one light that is initially off. 
// You walk down the row of switches and toggle every one of them. You walk back to the beginning of the row and start another pass. 
// On this second pass, you toggle switches 2, 4, 6, and so on. On the third pass, you go back to the beginning again, 
// this time toggling switches 3, 6, 9, and so on. You continue to repeat this process until you have gone through n repetitions.

// Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after n repetitions.

/*
Initially you turn on all switches
Every time you start round you start one switch up from before
Flip switch on multiples of the number you start on?

Input: number integer representing number of switches and number of rounds
Output: array representing the switches that are on after all rounds

Explicits: - there are n rounds and n number switches
            - initially start with all switches off an turn them all on with 1 round
Implicits:  - every round you start one switch up from last and flip swithcees on the multiples of the n round
            - 

DS: number --> array

Algorithm:
    - Create an array with n number elements, all with string on
    - Iterate through the object
        - if index is multiple of n
            - switch value to off or on
    - Map a new array with on switces as index + 1
*/

function lightsOn(switches) {
    let switchArray = new Array(switches).fill(false);
    let round = 1;
    while (round <= switches) {
        switchArray = toggleLights(switchArray, round);
        round += 1;
    }
    let onSwitches = [];
    for (let i = 0; i < switchArray.length; i += 1) {
        if (switchArray[i]) {
            onSwitches.push(i + 1);
        }
    }
    console.log(onSwitches);
};


function toggleLights(lightArray, round) {
    return lightArray.map((light, index) => ((index + 1) % round === 0) ? !light : light);
}

  lightsOn(5);        // [1, 4]
  // [1, 2 off, 3 off, 4 on, 5 off] all off
  // Detailed result of each round for `5` lights
  // Round 1: all lights are on
  // Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
  // Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
  // Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
  // Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on
  
//   lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]