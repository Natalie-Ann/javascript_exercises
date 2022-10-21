let list = document.querySelector('ul');
let main = document.querySelector('main');

function removeHighlighting() {
    let highlightedNode = document.querySelector('.highlight');
    if (highlightedNode) {
        highlightedNode.classList.remove('highlight');
    };
}

function isArticleOrDescendent(node) {
    return (node.nodeName === 'ARTICLE' || node.parentNode.nodeName === 'ARTICLE');
}

function getArticle(node) {
    if (node.nodeName === 'ARTICLE') {
        return node;
    } else {
        return node.parentNode;
    }
}

list.addEventListener('click', (e) => {
    e.stopPropagation();

    let linkNode = e.target;
    let articleId = linkNode.getAttribute('href');
    let article = document.querySelector(articleId);
    removeHighlighting();
    article.classList.add('highlight');
});

document.addEventListener('click', (e) => {
    removeHighlighting();

    if (isArticleOrDescendent(e.target)) {
        let article = getArticle(e.target);
        article.classList.add('highlight');
    } else {
        main.classList.add('highlight');
    }
})



