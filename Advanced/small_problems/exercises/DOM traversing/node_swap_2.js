// Write a function that takes two element ids as arguments and swaps the positions of the elements represented by the ids. The function returns true for valid swaps and undefined for invalid. To put the focus on the node swapping functionality, you can assume that nodes will have a value for the id attribute and two arguments will always be provided. Use the following HTML and sample codes to test your output:

/*
- Obtain both nodes from the ids (getElementById)
- Return undefined if 
    - either id doesn't exist return undefined
    - either id is a child of the other (contains)
- Save a reference to one of the nodes
- Save a reference to the location (using parentNode?)
- Replace one node with the other node
- Insert other node based on saved location

*/


function nodeSwap(firstId, secondId) {
    let firstNode = document.getElementById(firstId);
    let secondNode = document.getElementById(secondId);

    if (!firstNode || !secondNode) {
        return undefined;
    };

    if (firstNode.contains(secondNode) || secondNode.contains(firstNode)) {
        return undefined;
    }

    let parentNode = secondNode.parentNode;
    let nextSibling = secondNode.nextElementSibling;
    firstNode.replaceWith(secondNode);
    parentNode.insertBefore(firstNode, nextSibling);

    return true;
}

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