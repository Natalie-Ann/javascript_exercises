/*
Write a function that takes an Array as an argument and reverses its elements in place. 
That is, mutate the Array passed into this method. The return value should be the same Array object.

You may not use Array.prototype.reverse().

Input: array
Output: same array with elements reversed

Explicits:  - can't use reverse method
            - returns same object (array is mutated)
Implicits:  - last element becomes first element
            - empty array returns empty array
            - array with one element returns same array (element itself is not reversed)

Algorithm:
- Start function with array parameter
  - if array length is less than or eqal to 1, return same array
  - Iterate through the array
    - for loop, through length of the array
    - array[i].pop last element and reassign to first element
    - array[0] = 
   
    
*/

/*

function reverse(array) {
 let leftIndex = 0;
 let rightIndex = array.length - 1;
 
 while (leftIndex < array.length/2) {
   [array[leftIndex], array[rightIndex]] = [array[rightIndex], array[leftIndex]];
   leftIndex += 1;
   rightIndex -= 1; 
 }
  return array;
}

*/


function reverse(array) {
  let elementsToSwap = array.length;

  while (elementsToSwap > 0) {
    array.unshift(array.pop());
    elementsToSwap -= 1;
  }

  return array;
}

[1, 2, 3, 4]
4
4, 1, 2, 3
3
3, 4, 1, 2
2
2, 3, 4, 1
1
1, 2, 3, 4

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true


let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true