// Write a function that colors a specific generation of the DOM tree. A generation is a set of elements that are on the same level of indentation. We'll be using a "styled" HTML for this exercise to better visualize the generations. You may use the .generation-color class to color the specific generation. You can assume that only non-negative integers will be provided as arguments. Following are some sample output to help you test your code:

//get children; get children of children X number of times, reassign

function findGeneration(generationNumber) {
    let generation = [];
    let currentGeneration = [].slice.call(document.body.children);

    for (let i = 1; i < generationNumber; i += 1) {
        let nextGeneration = [];
        currentGeneration.forEach(child => {
            if (child.children) {
                [].slice.call(child.children).forEach(child => nextGeneration.push(child));
            }
        })
        currentGeneration = nextGeneration;
    }

    generation.push(...currentGeneration);

    return generation;
}


function colorGeneration(generationNumber) {
    let generation = findGeneration(generationNumber);
    generation.forEach(member => {
        member.classList.add('generation-color');
    });
}