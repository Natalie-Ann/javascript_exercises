// Create a custom set type.

// Sometimes it is necessary to define a custom data structure of some type, like a set. 
// In this exercise you will define your own set type. How it works internally doesn't matter, 
// as long as it behaves like a set of unique elements that can be manipulated in several well defined ways.

// In some languages, including Ruby and JavaScript, there is a built-in Set type. 
// For this problem, you're expected to implement your own custom set type. 
// Once you've reached a solution, feel free to play around with using the built-in implementation of Set.

// For simplicity, you may assume that all elements of a set must be numbers.

class CustomSet {
  constructor(arraySet) {
    if (arraySet) {
      this.arraySet = arraySet;
    } else {
      this.arraySet = [];
    }
  }
  
  isEmpty() {
    return this.arraySet.length === 0;
  }
  
  contains(value) {
    return this.arraySet.includes(value);
  }
  
  isSubset(object) {
    if (this.isEmpty()) {
      return true;
    }
    if (object.arraySet.length === 0) {
      if (!this.isEmpty()) {
        return false;
      }
    }
    return this.arraySet.every(number => object.contains(number));
  }
  
  isDisjoint(object) {
    return !(this.arraySet.some(number => object.contains(number)));
  }
  
  isSame(object) {
    let sortedObjectSetString = object.arraySet.slice().sort((a, b) => a - b).join('');
    let sortedThisSetString = this.arraySet.slice().sort((a, b) => a - b).join('');
    return sortedObjectSetString === sortedThisSetString;
  }
  
  add(number) {
    if (this.contains(number)) {
      return this;
    } else {
    this.arraySet.push(number);
    return this;
    }
  }
  
  intersection(object) {
    if (this.isDisjoint(object)) {
      return new CustomSet();
    } else {
      let intersectionArray = this.arraySet.filter(value => object.arraySet.includes(value));
      return new CustomSet(intersectionArray);
    }
  }
  
  difference(object) {
    if (this.isEmpty()) {
      return new CustomSet();
    }
    
    if(object.isEmpty()) {
      return this;
    }
    
    let differenceSet = this.arraySet.filter(value => (!object.arraySet.includes(value)));
    return new CustomSet(differenceSet);
  }
  
  union(object) {
    let joinedSet = this.arraySet.concat(object.arraySet);
    joinedSet = joinedSet.filter((number, index) => joinedSet.indexOf(number) === index);
    return new CustomSet(joinedSet);
  }
  
}

// let example = new CustomSet().add(3);
// console.log(example);
// let example2 = new CustomSet([1, 2, 3]);
// console.log(example.isSubset(example2));

module.exports = CustomSet;