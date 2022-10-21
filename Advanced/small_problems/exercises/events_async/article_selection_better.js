function clearHighlighting() {
    let highlightedNodes = document.querySelectorAll('.highlight');
    [].slice.call(highlightedNodes).forEach(node => node.classList.remove('highlight'));
}

function getArticle(link) {
    let articleId = link.getAttribute('href');
    return document.querySelector(`${articleId}`);
}


document.addEventListener('DOMContentLoaded', (e) => {

    document.addEventListener('click', (e) => {
        let main = document.querySelector('main');
        let target = e.target;

//if target is an article or a child of an article, highlight that article
    if (target.tagName === 'ARTICLE') {
        e.stopPropagation();
        clearHighlighting();
        target.classList.add('highlight');
    } else if (target.parentNode.tagName === 'ARTICLE') {
      e.stopPropagation();
      clearHighlighting();
      target.parentNode.classList.add('highlight');
  //if target is a link, highlight the corresponding article
    } else if (target.tagName === 'A') {
        e.stopPropagation();
        clearHighlighting();
        let article = getArticle(target);
        article.classList.add('highlight');
//if the click is somewhere else, highlight main element
    } else {
        clearHighlighting();
        main.classList.add('highlight');
    }

    });
    
      
  });