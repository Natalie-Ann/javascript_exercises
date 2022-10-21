/*
Write a function that takes a year as input and returns the century. The return value should be a string that begins with the century number, 
and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

Input: number (year)
Output: string (century)

Explicits: century = 1-100 of that hundred years; endings are 'st', 'nd', 'rd', or 'th'
Implicits:  - if century number ends with 0, then output will end with 'th'
            - if century number ends with 1, then output will end with'st'
            - if century number ends with 3, then output will end with 'rd'
            - if century number ends with 2, then output will end with 'nd'
            - if divide by 100, get close to the century number, round up
              - 2000/100 = 20
              - 2001/100 = 20.01
              - 1965/100 = 19.65
              - 256/100 = 2.56
              - 5/100 = 0.05
              - 10103/100 = 101.03
              - 1052/100 = 10.52
              - 1127/100 = 11.27
              - 11201/100 = 112.01

Data structure: string

Algorithm:
- Start function with year argument
  - Divide year by 100 and round up (Math.ceil), save that to variable centuryNumber
  - if century number ends with 0, 4, 5, 6, 7, 8, 9 then output will end with 'th'
    - log centuryNumber + 'th'
    else if century number ends with 1, then output will end with'st'
    else if century number ends with 3, then output will end with 'rd'
    else if century number ends with 2, then output will end with 'nd'
*/

function century (year) {
  let centuryNumber = Math.ceil(year/100);
  let lastNumber = Number(String(centuryNumber).slice(-1));
  let lastNumbers = Number(String(centuryNumber).slice(-2));
  if (lastNumbers === 11 || lastNumbers === 12 || lastNumbers === 13) {
    return `${centuryNumber}th`;
  }
  switch (lastNumber) {
    case 1:
      return `${centuryNumber}st`;
    case 2: 
      return `${centuryNumber}nd`;
    case 3:
      return `${centuryNumber}rd`;
    default:
      return `${centuryNumber}th`;
  }
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"