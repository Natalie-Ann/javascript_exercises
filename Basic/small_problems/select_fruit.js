//select the key-value pairs where the value is 'Fruit'.

/*
Input: object
Output: object

Explicits:  - output object contains key-value pairs with values of fruit
Implicits:  - 

Data Structure: object --> array --> object

Algorithm:
- Start function with object input
  - Convert object to array of arrays; use Object.entries() method to create key-value pair arrays
    - declare a variable objectArray and initialize to value of Object.entries
  - Declare a variable outputArray and initialize to a value of empty array
  - Loop through the objectArray array (need 2 loops)
    - 1st loop goes through element arrays
      - 2nd loop goes through key-value pairs within inner array
        - if second element of array is 'Fruit', then add the element array to the outputArray
          - use push method to add to array 
  - Convert outputArray to object using Object.fromEntries() and save to variable outputObject
  - Return outputObject

*/



let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};


function selectFruit(object) {
  let objectArray = Object.entries(object);
  let outputArray = [];
  for (let i = 0; i < objectArray.length; i += 1) {
    if (objectArray[i][1] === 'Fruit') {
      outputArray.push(objectArray[i]);
    }
  }
  console.log(Object.fromEntries(outputArray));
}

selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }