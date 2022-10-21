/*
In the previous two exercises, you developed functions that convert simple numeric strings to signed integers. 
In this exercise and the next, you're going to reverse those functions.

Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on) to the string representation of that integer.

You may not use any of the standard conversion functions available in JavaScript, such as String(), 
Number.prototype.toString, or an expression such as '' + number. 
Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number.

Input: number
Output: string

Explicits:  - output is input in string form

Data Structure: number --> reassign(?) --> reference object --> array --> string

Algorithm:
- Start function with number parameter
  - Declare variable digitObject {number: number}
  - Reassign the number by referencing digitObject
  - Return number


*/


function integerToString(number) {
  let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
;
}

integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"