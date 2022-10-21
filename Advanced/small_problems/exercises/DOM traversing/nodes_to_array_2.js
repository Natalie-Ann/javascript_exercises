// Implement a function that converts the DOM, starting from the body, to nested arrays. Each element in the DOM is represented as ["PARENT_TAG_NAME", [children]] where children are elements as well and as such follow the same format. When an element has no children, it's represented as ["PARENT_TAG_NAME", []]. For instance, if the HTML doesn't have any elements inside the body, the result array would be: ["BODY", []]. Likewise, if the HTML only has a div element as its content, the result array would be: ["BODY", [["DIV", []]]].

// <!doctype html>
// <html>
//   <head>
//     <title>Nodes to Array</title>
//   </head>
//   <body>
//     <header id="1"></header>
//     <main id="2"></main>
//     <footer id="3"></footer>
//   </body>
// </html>

/*
- Create container, ['BODY', []]
- Walk through the document.body
    - for each node, create an array, [currentNode, [children]]
    - for each child, get children and continue creating an array like above
    - push to the outer container
- Return array
*/

function walk(node, callback) {
    callback(node);
    for (let i = 0; i < node.childNodes.length; i += 1) {
        walk(node.childNodes[i], callback);
    }
};

function nodesToArr() {
    let container;

    walk(document.body, (node) => {
        if (node.children) {
            container.push([node.nodeName, [node.children]]);
        } else {
            [node.nodeName, []];
        }
    })
}
nodesToArr(); // ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]]
// OR

// ["BODY", [
//     ["HEADER", []],
//     ["MAIN", []],
//     ["FOOTER", []]]]


// <!doctype html>
//     <html>
//       <head>
//         <title>Nodes to Array</title>
//       </head>
//       <body>
//         <header id="1"></header>
//         <main id="2">
//           <div></div>
//           <div></div>
//         </main>
//         <footer id="3"></footer>
//       </body>
//     </html>

//  ["BODY",[["HEADER",[]],["MAIN",[["DIV",[]],["DIV",[]]]],["FOOTER",[]]]]

// OR

// ["BODY", [
//     ["HEADER", []],
//     ["MAIN", [
//       ["DIV", []],
//       ["DIV", []]]],
//     ["FOOTER",[]]]]


    // <!doctype html>
    // <html>
    //   <head>
    //     <title>Nodes to Array</title>
    //   </head>
    //   <body>
    //     <div id="1">
    //       <div id="4"></div>
    //       <div id="5">
    //         <div id="6"></div>
    //       </div>
    //     </div>
    //     <div id="2"></div>
    //     <div id="3">
    //       <div id="7"></div>
    //       <div id="8"></div>
    //       <div id="9"></div>
    //     </div>
    //   </body>
    // </html>

// nodesToArr();
//  ["BODY",[["DIV",[["DIV",[]],["DIV",[["DIV",[]]]]]],["DIV",[]],["DIV",[["DIV",[]],["DIV",[]],["DIV",[]]]]]]

// OR

// ["BODY", [
//     ["DIV", [
//       ["DIV", []],
//       ["DIV", [
//         ["DIV",[]]]]]],
//     ["DIV", []],
//     ["DIV", [
//       ["DIV", []],
//       ["DIV", []],
//       ["DIV", []]]]]]