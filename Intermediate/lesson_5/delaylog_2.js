// Write a JavaScript function named delayLog that loops through the numbers from 1 to 10, 
// and logs each number after that number of seconds. It should log 1 after 1 second, 2 after 2 seconds, and so on.

function delayLog() {
  for (var delay = 1; delay <= 10; delay += 1) {
    setTimeout(() => console.log(delay), delay * 1000);
  }
}


// function delayLog() {
//   for (let delay = 1; delay <= 10; delay += 1) {
//     setTimeout(() => console.log(delay), 1000);
//   }
// }

delayLog();


