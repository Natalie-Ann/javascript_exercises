// Write a randomizer function that accepts n callbacks and calls each callback at some random point in time between now and 2 * n seconds from now. For instance, if the caller provides 5 callbacks, the function should run them all sometime within 10 seconds.

// While running, randomizer should log the elapsed time every second: 1, 2, 3, ..., 2 * n.

//Expect the output to change with each run due to the random execution times.

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
//       let n = arguments.length;
//       let runTime = n * 2;
//       arguments = [...arguments].map(callback => {
//           callback = Object(callback)
//           callback.time = getRandomIntInclusive(1, runTime);
//           return callback;
//       });
//       console.log(arguments);
//       for (let i = 1; i <= runTime; i += 1) {
//         setTimeout(() => {
//             console.log(i);
//             [...arguments].forEach(callback => {
//                 if (callback.time === i) {
//                     callback();
//                 }
//             });
//         }, i*1000);
//     };
//   }

//   function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
//   }

function randomizer(...callbacks) {
    if (callbacks.length < 1) {
      return;
    }
  
    const secondsEnd = 2 * callbacks.length;
    let secondsElapsed = 0;
  
    const timeLogger = setInterval(() => {
      secondsElapsed += 1;
      console.log(secondsElapsed);
  
      if (secondsElapsed >= secondsEnd) {
        clearInterval(timeLogger);
      }
    }, 1000);
  
    callbacks.forEach(callback => {
      const executeTime = Math.floor(Math.random() * secondsEnd * 1000);
      setTimeout(callback, executeTime);
    });
  }
    

  
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