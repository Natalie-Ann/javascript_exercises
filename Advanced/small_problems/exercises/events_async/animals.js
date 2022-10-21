let classificationCombinations = {
    'Bear':['Vertebrate', 'Warm-blooded', 'Mammal'],
    'Turtle': ['Vertebrate', 'Cold-blooded'],
    'Whale': ['Vertebrate', 'Warm-blooded', 'Mammal'],
    'Salmon': ['Vertebrate', 'Cold-blooded'],
    'Ostrich': ['Vertebrate', 'Warm-blooded', 'Bird'],
    'Animals': ['Animals', 'Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'], 
};

let animalCombinations = {
    'Vertebrate': ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
    'Warm-blooded': ['Bear','Whale', 'Ostrich'],
    'Cold-blooded': ['Salmon', 'Turtle'],
    'Mammal': ['Bear', 'Whale'],
    'Bird': ['Ostrich'],
    'Classifications': ['Classifications', 'Vertebrate', 'Warm-blooded', 'Cold-blooded', 'Mammal', 'Bird'],
}

function clearDropDown(dropDownType) {
    [...dropDownType].forEach(node => {
        node.remove();
    });
}

function addDefaultOptions() {
    classificationCombinations.Animals.forEach(animal => {
        let newOption = new Option(animal);
        animalsDropDown.appendChild(newOption);
    });
    
    animalCombinations.Classifications.forEach(classification => {
        let newOption = new Option(classification);
        classificationsDropDown.appendChild(newOption);
    });
};

function addOptions(currentPick, dropDownMenu) {
    let combinations = animalCombinations[currentPick] || classificationCombinations[currentPick];
    console.log(combinations);

    combinations.forEach(animalOrClass => {
        let newOption = new Option(animalOrClass);
        dropDownMenu.appendChild(newOption);
    });

}

let form = document.getElementById('selection-filters');
let clearButton = document.getElementById('clear');
let animalsDropDown = document.getElementById('animals');
let classificationsDropDown = document.getElementById('animal-classifications');

clearButton.addEventListener('click', (e) => {
    e.preventDefault();
    
    clearDropDown(animalsDropDown);
    clearDropDown(classificationsDropDown);

    addDefaultOptions();
});

animalsDropDown.addEventListener('change', (e) => {
    clearDropDown(classificationsDropDown);

    let selectedAnimal = e.target.value;

    addOptions(selectedAnimal, classificationsDropDown);
})

classificationsDropDown.addEventListener('change', (e) => {
    clearDropDown(animalsDropDown);

    let selectedClassification = e.target.value;

    addOptions(selectedClassification, animalsDropDown);

});









