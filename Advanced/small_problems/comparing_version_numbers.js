// While version numbers often appear to be decimal numbers, they are, in fact, a convenient notation for a more complicated number system. The following are all legal version numbers:

// 1
// 1.0
// 1.2
// 3.2.3
// 3.0.0
// 4.2.3.0

// Write a function that takes any two version numbers in this format and compares them, with the result of this comparison showing whether the first is less than, equal to, or greater than the second version:

// If version1 > version2, we should return 1.
// If version1 < version2, we should return -1.
// If version1 === version2, we should return 0.
// If either version number contains characters other than digits and the . character, we should return null.

// 0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37



function compareVersions(version1, version2) {
    let nonNumbers = /[^0-9\.]/g;
    if (nonNumbers.test(version1) || nonNumbers.test(version2)) {
        return null;
    } else {
        return 'only numbers and periods!';
    }
  };


  console.log(compareVersions('1.2.3', '3.5.7'));
  console.log(compareVersions('a.b.c', '1.2.3'));