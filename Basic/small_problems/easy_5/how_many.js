/*Write a function that counts the number of occurrences of each element in a given array. 
Once counted, log each element alongside the number of occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").

*/

/*
Input: array
Output: string (with number)

Explicits: output string has count of how many times element is in the input array; case-sensitive
Implicits:

Data Structure: array

Algorithm:
- Start function with array input
  - declare a variable tally and assign it an empty object 
  - Start loop
    - initialization: i = 0
    - stopping condition: array.length
    - iteration statement: i += 1
      - check if value in tally object exists
        - if new, set equal to 0
        - if it does already exist, add 1
      
       

*/

function countOccurrences (array) {
  let lowerCaseArray = array.map(element => element.toLowerCase());
  let tally = {};
  for (let i = 0; i < lowerCaseArray.length; i += 1) {
    tally[lowerCaseArray[i]] = tally[array[i]] || 0;
    tally[array[i]] = tally[array[i]] + 1;
  }
  for (let prop in tally) {
    console.log(`${prop} => ${tally[prop]}`);
  }
}




let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck', 'suv'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2