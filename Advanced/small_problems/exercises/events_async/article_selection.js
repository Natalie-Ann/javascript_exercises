document.addEventListener('DOMContentLoaded', (e) => {
    let articles = document.querySelectorAll('article');
    let main = document.querySelector('main');
    
    let article1 = document.querySelector('#article-1');
    let article2 = document.querySelector('#article-2');
    let article3 = document.querySelector('#article-3');
    let article4 = document.querySelector('#article-4');
    
    let article1link = document.querySelector("a[href='#article-1']");
    let article2link = document.querySelector("a[href='#article-2']");
    let article3link = document.querySelector("a[href='#article-3']");
    let article4link = document.querySelector("a[href='#article-4']");
    
    article1link.addEventListener('click', (e) => {
      e.stopPropagation();
      articles.forEach(article => article.classList.remove('highlight'));
      main.classList.remove('highlight');
      article1.classList.add('highlight');
    });
    
    article1.addEventListener('click', (e) => {
      e.stopPropagation();
      articles.forEach(article => article.classList.remove('highlight'));
      main.classList.remove('highlight');
      article1.classList.add('highlight');
    })
    
    article2link.addEventListener('click', (e) => {
      e.stopPropagation();
      articles.forEach(article => article.classList.remove('highlight'));
      main.classList.remove('highlight');
      article2.classList.add('highlight');
    });
    
    article2.addEventListener('click', (e) => {
      e.stopPropagation();
      articles.forEach(article => article.classList.remove('highlight'));
      main.classList.remove('highlight');
      article2.classList.add('highlight');
    })
    
    article3link.addEventListener('click', (e) => {
      e.stopPropagation();
      articles.forEach(article => article.classList.remove('highlight'));
      main.classList.remove('highlight');
      article3.classList.add('highlight');
    });
    
    article3.addEventListener('click', (e) => {
      e.stopPropagation();
      articles.forEach(article => article.classList.remove('highlight'));
      main.classList.remove('highlight');
      article3.classList.add('highlight');
    });
    
    article4link.addEventListener('click', (e) => {
      e.stopPropagation();
      articles.forEach(article => article.classList.remove('highlight'));
      main.classList.remove('highlight');
      article4.classList.add('highlight');
    });
    
    article4.addEventListener('click', (e) => {
      e.stopPropagation();
      articles.forEach(article => article.classList.remove('highlight'));
      main.classList.remove('highlight');
      article4.classList.add('highlight');
    });
    
    document.addEventListener('click', (e) => {
      articles.forEach(article => article.classList.remove('highlight'));
      main.classList.add('highlight');
    });
    
    
  })