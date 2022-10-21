// Replace the invocation of countdown with an IIFE that produces the same results.

(function(number) {
  for (let i = number; i >= 0; i -= 1) {
    console.log(i);
  }
})(7);

(function countdown(startNumber) {
  console.log(startNumber);
  startNumber -= 1;
  if (startNumber >= 0) {
    countdown(startNumber);
  }
})(7);


// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

