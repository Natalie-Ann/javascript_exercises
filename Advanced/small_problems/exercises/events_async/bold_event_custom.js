// Implement a function that makes an element bold and allows the user of the function to optionally do something else with it.

function makeBold(element, callback) {
    element.style.fontWeight = 'bold';
    callback(element);
}

let sectionElement = document.querySelector('section');

makeBold(sectionElement, function(elem) {
    elem.classList.add('highlight');
  });

sectionElement.classList.contains('highlight'); // true
sectionElement.style.fontWeight; // "bold"