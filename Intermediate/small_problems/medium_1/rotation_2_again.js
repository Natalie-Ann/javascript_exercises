// Write a function that rotates the last n digits of a number. For the rotation, rotate by one digit to the left, moving the first digit to the end.

/*
Input: number, how many digits to rotate
Output: number

Explicits:  - rotate by one digit to the left, moving first digit to the end
Implicit:   - take out the first digit of the group and push to the end

DS: array

Algorithm:
- Convert number to an array of digits
    - [...number]
- Splice n number of digits from the end of the array
    - Remove the first digit from the splice
    - Push that first digit to the end of the splice
- Merge the beginning and end of the array
- Convert back to a number and return

*/

function rotateRightmostDigits(number, digits) {
    let newNumber = [...String(number)];
    let group = newNumber.splice(-digits);
    let rotatedNumber = group.shift();
    group.push(rotatedNumber);
    console.log(Number(newNumber.concat(group).join('')));
}
rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917