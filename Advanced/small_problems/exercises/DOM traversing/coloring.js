// Write a function that colors a specific generation of the DOM tree. A generation is a set of elements that are on the same level of indentation. We'll be using a "styled" HTML for this exercise to better visualize the generations. You may use the .generation-color class to color the specific generation. You can assume that only non-negative integers will be provided as arguments. Following are some sample output to help you test your code:


/*
Input: number representing generation number
Output: nothing to console, but changes DOM to highlight certain generations

Explicits:  - generation = set of elements on same level of indentation --> sibling nodes
            - use .generation-color class to change colors
            - only non-negative integer will be arguments
Implicits:  - need to divide into generations; if generation doesn't exist, don't change anything
            - generation must be > 0

DS: arrays?

Algorithm:
    - Divide into generations (arrays of sibling elements and label them)
        - Declare empty array
        - Create an array of siblings, starting with body.children and push to empty array
    - Highlight the generation with generation-color class
*/


function createGeneration() {
    let generations = {};
    let currentGeneration = [document.body];
    let genNumber = 0;

    while (currentGeneration.length > 0) {
        genNumber += 1;
        currentGeneration = getChildrenOf(currentGeneration);
        if (currentGeneration.length === 0) break;
        generations[genNumber] = currentGeneration;  
    }
    return generations;
}

function getChildrenOf(generation) {
    return generation.map(node => [...node.children]).flat();
}


function colorGeneration(genNumber) {
    let generations = createGeneration();
    let currentGeneration = generations[genNumber];
    currentGeneration.forEach(node => node.classList.add('generation-color'));
}


colorGeneration(1); //highlights id 1
colorGeneration(4); //highlights 4, 7, 12, 16
colorGeneration(7) //highlights 10, 15, 19, 22
colorGeneration(8); //highlights nothing
colorGeneration(3); //highlights 3, 6, 11, 24
colorGeneration(0); //highlights nothing