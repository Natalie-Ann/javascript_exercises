
/*
- Define the currentElement (startingElement)
- Declare the domtree as an empty array
- While loop: while currentElement does not equal document.body
    - Get the tags of sibling elements  
    - Add the sibling tags to an array
    - Push the siblingtags array to the DOMtree array
    - Reassign the currentElement to the parent of currentElement
- Return the domTree

*/

function domTreeTracer(id) {
    let currentElement = document.getElementById(id);
    let domTree = [];

    while (currentElement !== document.body) {
        let siblingTagNames = [].slice.call(currentElement.parentNode.children).map(sibling => sibling.nodeName);
        domTree.push(siblingTagNames);
        currentElement = currentElement.parentNode;
    }

    return domTree;
}



domTreeTracer(1); // [["ARTICLE"]]
domTreeTracer(2); // [["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]
domTreeTracer(22); // [["A"], ["STRONG"], ["SPAN", "SPAN"], ["P", "P"], ["SECTION", "SECTION"], ["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]