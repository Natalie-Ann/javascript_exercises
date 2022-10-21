const combinations = {
    'Animals': ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
    'Vertebrate': ['Animals', 'Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
    'Warm-blooded': ['Animals', 'Bear', 'Whale', 'Ostrich'],
    'Cold-blooded': ['Animals', 'Salmon', 'Turtle'],
    'Mammal': ['Animals', 'Bear', 'Whale'],
    'Bird': ['Animals', 'Ostrich'],
    'Classifications': ['Vertebrate', 'Warm-blooded', 'Mammal', 'Cold-blooded', 'Bird'],
    'Bear': ['Classifications', 'Vertebrate', 'Warm-blooded', 'Mammal'],
    'Turtle': ['Classifications', 'Vertebrate', 'Cold-blooded'],
    'Whale': ['Classifications', 'Vertebrate', 'Warm-blooded', 'Mammal'],
    'Salmon': ['Classifications', 'Vertebrate', 'Cold-blooded'],
    'Ostrich': ['Classifications', 'Vertebrate', 'Warm-blooded', 'Bird']
  };
  
  
  document.addEventListener('DOMContentLoaded', (e) => {
    let form = document.querySelector('form');
    let classifications = form.querySelector('#animal-classifications');
    let animals = form.querySelector('#animals');
    let classificationsClone = classifications.cloneNode(true);
    let animalsClone = animals.cloneNode(true);

    classifications.addEventListener('change', (e) => {
      let classificationPick = e.target.value;
      let tempAnimalsClone = animalsClone.cloneNode(true);
      let animalOptions = combinations[classificationPick];
      let filteredList = Array.prototype.slice.call(tempAnimalsClone.children).filter(child => {
        return animalOptions.includes(child.value);
      });
      animals.replaceChildren(...filteredList);
    })
    
    animals.addEventListener('change', (e) => {
      let animalPick = e.target.value;
      let tempClassificationClone = classificationsClone.cloneNode(true);
      let classificationOptions = combinations[animalPick];
      let filteredList = Array.prototype.slice.call(tempClassificationClone.children).filter(child => {
        return classificationOptions.includes(child.value);
      });
      classifications.replaceChildren(...filteredList);
    });  
    
    form.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
        e.preventDefault();
        form.reset();
        animals.replaceWith(animalsClone);
        classifications.replaceWith(classificationsClone);
      } 
    });
      
  });