// In this exercise, you'll build a simple inventory management system. The system is composed of an item creator, an items manager, 
// and a reports manager. 
// The item creator makes sure that all necessary information are present and valid. The item manager is responsible for creating items, 
// updating information about items, deleting items, and querying information about the items. Finally, the report manager generates reports 
// for a specific item or ALL items. Reports for specific items are generated from report objects created from the report manager. 
// The report manager is responsible for reports for all items.

// Component Specifications

// Here's all the required information for an item:

// SKU code: This is the unique identifier for a product. It consists of the first 3 letters of the item and the first 2 letters of the category. 
// If the item name consists of two words and the first word consists of two letters only, the next letter is taken from the next word.
// Item name: This is the name of the item. It must consist of a minimum of 5 characters. Spaces are not counted as characters.
// Category: This is the category that the item belongs to. It must consist of a minimum of 5 characters and be only one word.
// Quantity: This is the quantity in stock of an item. This must not be blank. You may assume that a valid number will be provided.

// The following are the methods that the items manager can perform:

// create: This method creates a new item. Returns false if creation is not successful.
// update: This method accepts an SKU Code and an object as an argument and updates any of the information on an item. 
// You may assume valid values will be provided.
// delete: This method accepts an SKU Code and deletes the item from the list. You may assume a valid SKU code is provided.
// items: This property returns all the items.
// inStock: This method list all the items that have a quantity greater than 0.
// itemsInCategory: This method list all the items for a given category

// The following are the methods on the reports managers:

// init: This method accepts the ItemManager object as an argument and assigns it to the items property.
// createReporter: This method accepts an SKU code as an argument and returns an object.
// The returned object has one method, itemInfo. It logs to the console all the properties of an object as "key:value" 
// pairs (one pair per line). There are no other properties or methods on the returned object (except for properties/methods 
// inherited from Object.prototype).
// reportInStock: Logs to the console the item names of all the items that are in stock as a comma separated values.

let ItemCreator = (function() {
  function validateItem(itemName, category, quantity) {
  let removedSpacesItemName = itemName.replace(' ', '');
  if (removedSpacesItemName.length < 5) {
    return false;
  }
  
  let categoryWords = category.split(' ').length;
  if (categoryWords > 1 || category.length < 5 ) {
    return false;
  }
  
  if (quantity === undefined) {
    return false;
  }
  
  return true;
}

  function createSKUCode(item, category) {
  let firstThreeLetters = item.slice(0, 3).toUpperCase();
  let firstTwoLetters = category.slice(0, 2).toUpperCase();
  let SKUCode = firstThreeLetters + firstTwoLetters;
  return SKUCode;
}

  return function(itemName, category, quantity) {
    if (validateItem(itemName, category, quantity)) {
    this.itemName = itemName;
    this.category = category;
    this.quantity = quantity;
    this.SKUCode = createSKUCode(itemName, category);
    } else {
      this.notValid = true;
    }
  };
})();

// function validateItem(itemName, category, quantity) {
//   let removedSpacesItemName = itemName.replace(' ', '');
//   if (removedSpacesItemName.length < 5) {
//     return false;
//   }
  
//   let categoryWords = category.split(' ').length;
//   if (categoryWords > 1 || category.length < 5 ) {
//     return false;
//   }
  
//   if (quantity === undefined) {
//     return false;
//   }
  
//   return true;
// }

// function createSKUCode(item, category) {
//   let firstThreeLetters = item.slice(0, 3).toUpperCase();
//   let firstTwoLetters = category.slice(0, 2).toUpperCase();
//   let SKUCode = firstThreeLetters + firstTwoLetters;
//   return SKUCode;
// }

let ItemManager = {
  items: [],
  
  create(itemName, category, quantity) {
    let newItem = new ItemCreator(itemName, category, quantity);
    if (newItem.notValid) {
      return false;
    }
    this.items.push(newItem);
    return 'valid item';
  },
  
  update(SKUCode, object) {
    let currentItem = this.items.filter(item => item.SKUCode === SKUCode)[0];
    Object.assign(currentItem, object);
  },
  
  inStock() {
    return this.items.filter(item => item.quantity > 0);
  },
  
  delete (SKUCode) {
  let deletedItem = this.items.filter(item => item.SKUCode === SKUCode)[0];
  let index = this.items.indexOf(deletedItem);
  this.items.splice(index, 1);
  },
  
  itemsInCategory(category) {
    return this.items.filter(item => item.category === category);
  }

};

let ReportManager = {
  init(itemManager) {
    this.items = itemManager;
  },
  
  reportInStock() {
    let inStockList = this.items.items.filter(item => item.quantity > 0);
    return inStockList.forEach(item => {
      console.log(item.itemName);
    });
  },
  
  createReporter(SKUCode) {
    let filteredObject = this.items.items.filter(item => item.SKUCode === SKUCode)[0];
    let returnedObject = {};
    returnedObject.itemInfo = function() {
      for (let prop in filteredObject) {
      console.log(`${prop}: ${filteredObject[prop]}`);
      }
    };
    return returnedObject;
  }
  
};


console.log(ItemManager.create('basket ball', 'sports', 0));           // valid item
console.log(ItemManager.create('asd', 'sports', 0));
console.log(ItemManager.create('soccer ball', 'sports', 5));           // valid item
console.log(ItemManager.create('football', 'sports'));
console.log(ItemManager.create('football', 'sports', 3));              // valid item
console.log(ItemManager.create('kitchen pot', 'cooking items', 0));
console.log(ItemManager.create('kitchen pot', 'cooking', 3));          // valid item
// returns list with the 4 valid items
console.log(ItemManager.items);

ReportManager.init(ItemManager);
// // logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// // returns list with the item objects for football and kitchen pot
console.log(ItemManager.inStock());
// // football,kitchen pot
ReportManager.reportInStock();

// // returns list with the item objects for basket ball, soccer ball, and football
console.log(ItemManager.itemsInCategory('sports'));

ItemManager.delete('SOCSP');
// // returns list the remaining 3 valid items (soccer ball is removed from the list)
console.log(ItemManager.items);

let kitchenPotReporter = ReportManager.createReporter('KITCO');
// console.log(kitchenPotReporter);
kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 10