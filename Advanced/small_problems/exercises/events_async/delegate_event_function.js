// Implement a function named delegateEvent that delegates events to the descendant (inner) elements of a parent element that match a given selector. The function takes four arguments: parentElement, selector, eventType, and callback. It returns true if it was able to add an event listener and undefined if it wasn't. For example, if the parentElement is section and selector is p, the function should delegate events of eventType on the p element within section to the function callback; consequently, the function returns true.

// Assume that all event handlers listen during the bubbling phase.

function delegateEvent(parentElement, selector, eventType, callback) {
    if (parentElement) {
        parentElement.addEventListener(eventType, (e) => {
            let selected = parentElement.querySelectorAll(selector);
            if ([].slice.call(selected).includes(e.target)) {
                callback(e);
            }
        });
        return true;
    }
    return undefined;
}

// Possible elements for use with the scenarios
const element1 = document.querySelector('table');
const element2 = document.querySelector('main h1');
const element3 = document.querySelector('main');


// Possible callback for use with the scenarios
const callback = ({target, currentTarget}) => {
    alert(`Target: ${target.tagName}\nCurrent Target: ${currentTarget.tagName}`);
  };

delegateEvent(element1, 'p', 'click', callback);