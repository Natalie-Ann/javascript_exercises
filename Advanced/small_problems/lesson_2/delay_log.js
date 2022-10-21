// Write a JavaScript function named delayLog that loops through the numbers from 1 to 10, and logs each number after that number of seconds. It should log 1 after 1 second, 2 after 2 seconds, etc. Note that the computation of the time is not dependent on when a previous number was logged. This means that for 10 numbers a total of 10 seconds would have passed.

function delayLog() {
    for (let i = 1; i <= 10; i += 1) {
        setTimeout(() => console.log(i), 1000*i);
    };
}

delayLog();
