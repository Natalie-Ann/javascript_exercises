// Write a function that takes two element ids as arguments and swaps the positions of the elements represented by the ids. The function returns true for valid swaps and undefined for invalid. To put the focus on the node swapping functionality, you can assume that nodes will have a value for the id attribute and two arguments will always be provided. Use the following HTML and sample codes to test your output:

/*
Input: 2 numbers, representing element ids
Output: true for valid swaps and undefined if invalid

Explicits:  - nodes all have id attributes
            - two arguments always provided
            - if one of the ids doesn't exist, return undefined
            - if one of the nodes is a child of the other, return undefined
Implicits:  - the node and all its children get swapped

DS: arrays?

Algorithm:
    - Determine if the nodes are valid
        - check if id attributes exist
            - getElementById
        - check if either node is a child of the other
            - HTMLCollection.namedItem
    - If valid
        - get copy of first node
        - get copy of second node
        - use replace method
            - replace second node with first node
            - replace first node with second node
        - return true
    - Return undefined
*/

function nodeSwap(firstId, secondId) {
    let firstNode = document.getElementById(firstId);
    let secondNode = document.getElementById(secondId);

    let child = firstNode.children.namedItem(secondId);
    let alternateChild = secondNode.children.namedItem(firstId);

    if ((firstNode && secondNode) && (!child && !alternateChild)) {
        let firstNodeCopy = firstNode.cloneNode(true);
        let secondNodeCopy = secondNode.cloneNode(true);

        let firstParent = firstNode.parentNode;
        let secondParent = secondNode.parentNode;

        firstParent.replaceChild(secondNodeCopy, firstNode);
        secondParent.replaceChild(firstNodeCopy, secondNode);

        return true;
    }

    return undefined;
}

//Invalid swaps
// at least one of the id attributes doesn't exist
nodeSwap(1, 20); // undefined

// at least one of the nodes is a "child" of the other
nodeSwap(1, 4); // undefined
nodeSwap(9, 3); // undefined

// one swap
nodeSwap(1, 2);


// multiple swaps
nodeSwap(3, 1);
nodeSwap(7, 9);