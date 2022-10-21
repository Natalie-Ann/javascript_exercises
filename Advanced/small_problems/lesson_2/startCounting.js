// Write a function named startCounting that logs a number to the console every second, starting with 1. Each number should be one greater than the previous number.

let id;

function startCounting() {
    let i = 1;
    id = setInterval(() => {
        console.log(i);
        i += 1;
    }, 1000*i);
}

startCounting();

function stopCounting() {
    clearInterval(id);
}