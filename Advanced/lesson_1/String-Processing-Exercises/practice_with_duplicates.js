let myArray = [1, 2, 3, 4, 4, 5, 5, 2, 7, 7, 9, 9];
let arrayWithNoDuplicates = Array.from(new Set(myArray));

let filteredOutDuplicates = myArray.filter((element, index, array) => array.indexOf(element) === index);

let reducedNoDuplicates = myArray.reduce((accum, current, index) => {
    if (accum.indexOf(current) === -1) {
        accum.push(current);
    }
    return accum;
}, []);

console.log(reducedNoDuplicates);

