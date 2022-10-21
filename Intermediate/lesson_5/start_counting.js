// Write a function named startCounting that logs a number to the console every second, starting with 1. 
// Each output number should be one greater than the previous one.
function startCounting() {
  let i = 1;
  let id = setInterval(function () {
    console.log(i);
    i += 1;
    if (i === 11) {
    stopCounting(id);
    }
    }, 1000);
  return id;
}

startCounting();

function stopCounting(id) {
  clearInterval(id);
}









