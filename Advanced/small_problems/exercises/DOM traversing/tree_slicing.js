// Implement a function, sliceTree, that is "similar" to the Array.prototype.slice method, but this time for a DOM tree. The sliceTree function takes two arguments: the start index which is the parent node's id attribute and, the end index which is the innermost child node's id attribute. The function returns an array of tagNames. Take note of the following when implementing the sliceTree function:

// It's similar to slice but different in the sense that slice isn't inclusive on the right hand side.
// The end index doesn't have to be the id of the "innermost" child node as some of the examples suggest.
// Only consider element nodes.
// Only elements that have body as an ancestor (parent, grandparent, etc.) are sliceable.
// If the id attribute of the start or end index is not in the DOM, return undefined.
// If the slice is not feasible — there's no path connecting the element at the starting index to the ending index — return undefined.
// Use this HTML and sample run to test out your code:

/*
Input: two numbers, representing ids
Output: array, with tags of elements from outermost to innermost (slice)

Explicits:  - only include element nodes
            - only include element nodes within body
            - return undefined if either id is not in the DOM
            - return undefined if elements are not connected

DS: arrays

Algorithm:
    - Check if ids of both inputs are valid
        - getElementById; if null return undefined
    - get the parent node (start of the array)
        - getElementById
    - check if second input number is child node of first number (if not, return undefined)
        - parent.children.namedItem returns truthy
    - Declare empty output array
    - Loop through from child to parent node
        - get tagNames for each element
        - add to outputArray
    - Return the outputArray
*/

function sliceTree(firstId, secondId) {
    let parent = document.getElementById(firstId);
    let child = document.getElementById(secondId);
    let isChild = parent.contains(child);

    if ((parent && child) && (isChild)) {
        let outputArray = [];
        let currentNode = child;
        while (currentNode.tagName !== parent.parentElement.tagName) {
            outputArray.unshift(currentNode.tagName);
            currentNode = currentNode.parentElement;
        }
        return outputArray;
    }

    return undefined;
}




sliceTree(1, 4); // ["ARTICLE", "HEADER", "SPAN", "A"]
sliceTree(1, 76); // undefined
sliceTree(2, 5); // undefined
sliceTree(5, 4); // undefined
sliceTree(1, 23); // ["ARTICLE", "FOOTER"]
sliceTree(1, 22); // ["ARTICLE", "MAIN", "SECTION", "P", "SPAN", "STRONG", "A"]
sliceTree(11, 19); // ["SECTION", "P", "SPAN", "STRONG", "A"]