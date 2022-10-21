/*Write a function that takes a floating point number representing an angle between 0 and 360 degrees and 
returns a string representing that angle in degrees, minutes, and seconds. 
You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, 
and a double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.

Input: number
Output: string

Explicits:  - output string includes degrees, minutes, and seconds
            - degree symbol = degrees, single quote = minutes; double quote = seconds
            - 1 degree = 60 minutes, 1 minute = 60 seconds
Implicit:   - max is 360 degrees
            - decimals represent minutes/seconds
            - integers return who degrees
Data Structure:
            - decimal/60 = minutes; left over decimal from that/60 = seconds
            
Algorithm:
  - Start function with number parameter
    - let degrees = integer number
    - Convert number to an array divided by decimal point
      - use string method to convert to string
      - use split method to convert to array with decimal point separator
      - declare variable named degrees initialized to the first element of this array
      - declare variable named minutes initialized to the integer of the second element of the array * 60
      - declare variable named seconds initialized to the remainder of the second element * 60
    - Use string interpolation to return degrees, minutes, seconds
      
  

*/

function dms(number) {
  let numberArray = String(number).split('.');
  if (parseInt(number, 10) === number) return console.log(`${number}˚00'00"`);
  let degrees = numberArray[0];
  let minutes = parseInt(('.' + numberArray[1]) * 60, 10);
  let fullMinutes = Number('.' + numberArray[1]) * 60;
  let secondsArray = String(fullMinutes).split('.');
  let seconds = parseInt(('.' + secondsArray[1]) * 60, 10);

  
  console.log(`${degrees}˚${minutes}'${seconds}"`);
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"