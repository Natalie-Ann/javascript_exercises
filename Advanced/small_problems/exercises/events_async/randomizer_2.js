// Write a randomizer function that accepts n callbacks and calls each callback at some random point in time between now and 2 * n seconds from now. For instance, if the caller provides 5 callbacks, the function should run them all sometime within 10 seconds.

// While running, randomizer should log the elapsed time every second: 1, 2, 3, ..., 2 * n.

function randomizer() {
    let lengthOfTime = 2 * [...arguments].length;
    
    [...arguments].forEach(arg => 
        assignTime(arg, lengthOfTime));
    
    for (let i = 1; i <= lengthOfTime; i += 1) {
        setTimeout(() => {
            console.log(i);
            let callback = [...arguments].filter((arg) => arg.time === i)[0] || undefined;
            if (callback) {
                callback();
            }
        }, i*1000);
    }
}

function assignTime(callback, lengthOfTime) {
    let assignedTime = Math.floor(Math.random() * lengthOfTime) + 1;
    callback.time = assignedTime;
}

// randomizer(1, 2, 3);

function callback1() {
    console.log('callback1');
  }
  
  function callback2() {
    console.log('callback2');
  }
  
  function callback3() {
    console.log('callback3');
  }
  
//   function randomizer(callbacks) {
//     // Your code here.
//   }
  
  randomizer(callback1, callback2, callback3);
  
  // Output:
  // 1
  // 2
  // "callback2"
  // 3
  // "callback3"
  // 4
  // 5
  // "callback1"
  // 6