function getDirectChildNodes() {
    let directChildren = {};

    for (let i = 1; i <= 10; i += 1) {
        let node = document.querySelector(`[id="${i}"]`);
        let directChildCount = node.childNodes.length;
        directChildren[i] = {};
        directChildren[i].direct = directChildCount;
    }

    let filteredChildren = Object.entries(directChildren).filter(entry => entry[1] > 0);
    filteredChildren = Object.fromEntries(filteredChildren);

    return filteredChildren;
};

function getIndirectChildNodes() {
    let indirectChildren;
    let directChildren = getDirectChildNodes();

    for (let id in directChildren) {

    }



}