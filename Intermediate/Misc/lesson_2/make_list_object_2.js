// Modify the makeList function so that it returns an object that provides the interface shown above, including add, list, and remove methods.

// function makeList() {
//   let items = [];

//   return function(newItem) {
//     let index;
//     if (newItem) {
//       index = items.indexOf(newItem);
//       if (index === -1) {
//         items.push(newItem);
//         console.log(newItem + " added!");
//       } else {
//         items.splice(index, 1);
//         console.log(newItem + " removed!");
//       }
//     } else if (items.length === 0) {
//       console.log("The list is empty.");
//     } else {
//       items.forEach(item => console.log(item));
//     }
//   };
// }

'use strict';

function makeList() {
  let items = [];
  return {
    add: function(item) {
      items.push(item);
      console.log(`${item} added!`);
    },
    
    list: function () {
      if (items.length === 0) {
        console.log('the list is empty');
      } else {
        items.forEach(item => console.log(item));
      }
    },
    
    remove: function(item) {
      let index = items.indexOf(item);
      items.splice(index, 1);
      console.log(`${item} removed!`);
    },
  };
}

let list = makeList();
list.add("peas");
// peas added!

list.list();
// peas

list.add("corn");
// corn added!

list.list();
// peas
// corn

list.remove("peas");
// peas removed!

list.list();
// corn