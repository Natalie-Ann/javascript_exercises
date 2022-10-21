let post = {
    title: 'Lorem ipsum dolor sit amet',
    published: 'April 1, 2015',
    body: '<p>testing</p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    tags: ['example tag', 'another example tag', 'yet another example tag'],
};

let secondPost = {
    title: 'Example',
    published: 'May 2, 2003',
    body: 'Blah blah blah testing1234',
}

let postsList = [post, secondPost];


document.addEventListener('DOMContentLoaded', (e) => {
    
    let tagsTemplate = document.querySelector('#tags').innerHTML;
    let compiledTagsTemplate = Handlebars.compile(tagsTemplate);
    Handlebars.registerPartial('tags', tagsTemplate);

    let template = document.querySelector('#posts').innerHTML;
    let compiledTemplate = Handlebars.compile(template);
    
    document.body.innerHTML = compiledTemplate({posts: postsList});
})