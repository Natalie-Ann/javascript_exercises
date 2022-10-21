//Given the following data structure, write some code to return an array which contains only the objects where all the numbers are even.


let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

/*
Algorithm:
  - access the array values
    arr[i][j][value]
  - filter
    - access the object
      - access the keyValue pairs
        - access the value
          - check whether the values are all even
            - if all even, return truthy
*/

console.log(arr.filter(object => {
  return Object.values(object).every(array => {
    return array.every(num => num % 2 === 0);
  });
}));



