// Implement a function that converts the DOM, starting from the body, to nested arrays. Each element in the DOM is represented as ["PARENT_TAG_NAME", [children]] where children are elements as well and as such follow the same format. When an element has no children, it's represented as ["PARENT_TAG_NAME", []]. For instance, if the HTML doesn't have any elements inside the body, the result array would be: ["BODY", []]. Likewise, if the HTML only has a div element as its content, the result array would be: ["BODY", [["DIV", []]]].

/*
Input: none
Output: array of arrays representing the body html

Explicits:  - result is an array of nested arrays
            - if element has no childre, then the second element of that array will be an empty array
            - if element does have children then second element will be array with child elements and each child repeating the process
Implicits:  - 

DS: arrays

Algorithm:
- Get children of parentElement, starting with body
    -document.body.children
- Declare empty array htmlArray
- If no children (null), return [['current element TAGNAME', []]]
- If children, return ['current element tagname, [children]]; recursion?

- helper function getTagname (node)
    - return ['node.tagName']

- helper function getChildren (node)
    - get node children in an array or return []
    - push to 
    - iterate through the children array
        - for each child
            - getTagnname(node)
            - push to the 
    

*/

function nodesToArr() {
    let body = document.body;
    let htmlArray = ['BODY'];

    for (let i = 0; i < body.children; i += 1) {

    }
    let bodyTag = getTagName(body);
    let children = getChildren(body);
    htmlArray.push(bodyTag);
    htmlArray.push(children);

    return htmlArray;
}

function getTagName(node) {
    return [node.tagName];
}

function getChildren(node) {
   return [node.children] || [];
}