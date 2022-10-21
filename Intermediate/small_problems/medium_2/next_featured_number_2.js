// A featured number (something unique to this exercise) is an odd number that is a multiple of 7, 
// with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 
// 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

// Write a function that takes an integer as an argument and returns the next featured number greater than the integer. 
// Issue an error message if there is no next featured number.

// NOTE: The largest possible featured number is 9876543201.

/*
Input: number
Output: number or error message

Explicits:  - output is next highest featured number or error message string
            - featured number is multiple of 7, and odd nume, all digits unique
            - largest featured number is 9876543201
Implicits:  - 

DS: arrays

Algorithm:
- Declare output number as input number + 1
- While outputnumber is not a featured number
    - Add 1 to input number 
- Return output number
- Featured number function
    - check if odd number
    - check if digits are unique
    - check if multiple of 7
*/

function isFeaturedNumber(potentialNumber) {
    if ((potentialNumber % 2 !== 0) && (potentialNumber % 7 === 0)) {
        let digitArray = String(potentialNumber).split('')
        return digitArray.every((digit, _,array) => digitArray.indexOf(digit) === digitArray.lastIndexOf(digit));
    } else {
        return false;
    }
}

function featured(inputNumber) {
    let outputNumber = inputNumber + 1;
    while (!(isFeaturedNumber(outputNumber))) {
        outputNumber += 1;
        if (outputNumber > 9876543201) return 'There is no possible number that fulfills those requirements.';
    };
    return outputNumber;
}

console.log(featured(12));           // 21
console.log(featured(20))           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."