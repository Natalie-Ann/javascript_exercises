/*
Given the following data structure write some code to return an array containing the colors of the
fruits and the sizes of the vegetables. The sizes should be uppercase, and the colors should be capitalized.

Input: object
Output: array

Explicits:  - output array contains fruit colors capitalized and vegetable sizes uppercase
            - 
Implicits:  - colors are still in an array

Data Structure: object --> retrieve values within the object --> array

Algorithm:
  - Start function with object parameter
    - Declare variable ValuesArray and initialize to Object.values(obj)
      [{type: 'fruit', colors: ['red, 'green'], size: 'small'}, {type:}]
    - Declare variable outputArray and initialize to empty array
    - Iterate through valuesArray (forEach)
      - if type is fruit, then add value of colors to outputArray
        - elementObject['type']
      - if type if vegetable, then add value of size to outputArray
*/
let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let outputArray = [];
let valuesArray = Object.values(obj);
valuesArray.forEach(elementObject => {
  if (elementObject['type'] === 'fruit') {
    let colors = elementObject['colors'];
    let capitalized = colors.map(element => {
      return element.slice(0,1).toUpperCase() + element.slice(1);
    });
    outputArray.push(capitalized);
  } else if (elementObject['type'] === 'vegetable') {
    outputArray.push(elementObject['size'].toUpperCase());
  }
})

console.log(outputArray);


//[["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]