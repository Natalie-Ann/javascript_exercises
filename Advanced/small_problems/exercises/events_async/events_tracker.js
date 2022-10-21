// Implement a function that tracks events on a web page by wrapping a callback function in a function that adds each event to a tracker object before invoking the callback. In other words, your function should take a callback function as an argument and return a new function that:

// Records the event, if the specific event hasn't been recorded before.
// Executes the original callback function.

let divRed = document.querySelector('#red');
let divBlue = document.querySelector('#blue');
let divOrange = document.querySelector('#orange');
let divGreen = document.querySelector('#green');
let tracker;

function track(callback) {
    return function(event) {
        tracker = {
            list: [],

            list() {
                return this.list;
            },

            elements() {
                return this.list.map(event => `${event.target.tagName.toLowercase()}#${event.target.id}`);
            },

            clear() {
                this.list.length = 0;
            },
        };
        if (tracker.list.includes(event)) {
            callback(event);
        } else {
            tracker.list.push(event);
            callback(event);
        }

    }
}

divRed.addEventListener('click', track(event => {
    document.body.style.background = 'red';
  }));
  
  divBlue.addEventListener('click', track(event => {
    event.stopPropagation();
    document.body.style.background = 'blue';
  }));
  
  divOrange.addEventListener('click', track(event => {
    document.body.style.background = 'orange';
  }));
  
  divGreen.addEventListener('click', track(event => {
    document.body.style.background = 'green';
  }));