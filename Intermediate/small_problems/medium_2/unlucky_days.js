// Write a function that takes a year as an argument and returns the number of 'Friday the 13ths' in that year. 
// You may assume that the year is greater than 1752 (when the modern Gregorian Calendar was adopted by the United Kingdom). 
// You may also assume that the same calendar will remain in use for the foreseeable future.

/*
Input: number representing year
Output: number representing count of Friday the 13ths

Explicits:  - year > 1752
Implicits:  - 12 possible 13th in one year
                - Find which ones are Fridays

DS: ? Date object

Algorithm:
    - For each month of the year, get day of week on 13th (array with 12 values)
    - Filter array for Fridays
    - Get length of the array

*/

function fridayThe13ths(year) {
    let dayArray = [];
    for (let i = 0; i <= 11; i += 1) {
        dayArray.push(new Date(year, i, 13).getDay());
    }
    console.log(dayArray.filter(day => day === 5).length);
}


fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2