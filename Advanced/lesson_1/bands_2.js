// There are problems with this data, though, so we first have to clean it up before we can use it:

// The band countries are wrong: all the bands should have 'Canada' as the country.
// The band name should have all words capitalized.
// Remove all dots from the band names.
// Write a function that can process the input band Array and return an Array that contains the fixed information:

/*
Input: array of objects
Output: array of objects

Explicits:  - output array should have the country property set to 'Canada'
            - output array should have words in name property capitalized and any dots removed
Implicits:  - None
            - other punctuation? spacing?

DS: arrays

Algorithm:
    - Make a copy of the inputData, save as processedData
    - Iterate through processedData (band)
        - forEach band:
            - change name to capitalized and remove dots
                - band.name = band.name[0] capitalized + rest
                - if band.name includes a dot
                    - replace dot with empty string
            - change country to 'Canada'
                - band.country = 'Canada'
    - Return processedData
*/


let bands = [
    { name: 'sunset rubdown', country: 'UK', active: false },
    { name: 'women', country: 'Germany', active: false },
    { name: 'a silver mt. zion', country: 'Spain', active: true },
  ];
  
//   function processBands(data) {
//       let processedData = data.slice().map(band => {
//           band.name = band.name.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
//           if (band.name.includes('.')) {
//               band.name = band.name.replace('.', '');
//           }
//           band.country = 'Canada';
//           return band;
//       });
//       console.log(processedData);
//   }

function processBands(data) {
    let dataCopy = data.slice();
    let result = dataCopy.map(band => removeDots(band)).map(band => capitalizeWords(band));
    return result;
}

function removeDots(data) {
    if (data.name.includes('.')) {
        data.name = data.name.replace('.', '');
    }
    return data;
}

function capitalizeWords(data) {
    data.name = data.name.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
    return data;
}
  
  console.log(processBands(bands));
  
  // should return:
//   [
//     { name: 'Sunset Rubdown', country: 'Canada', active: false },
//     { name: 'Women', country: 'Canada', active: false },
//     { name: 'A Silver Mt Zion', country: 'Canada', active: true },
//   ]