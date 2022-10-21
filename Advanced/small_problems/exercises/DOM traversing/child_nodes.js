function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
};



function childNodes(id) {
  let parent = document.getElementById(id);
  let directNodes = parent.childNodes.length;
  let indirectNodes = 0;

  walk (parent, (node) => {
    if (node !== parent) {
      indirectNodes += 1;
    }
  });

  return [directNodes, indirectNodes - directNodes];
}



childNodes(1); //[9, 12]
childNodes(4); // [3, 1]
childNodes(9); //[1, 1]