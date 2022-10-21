// Create three objects that represent the three books shown above. 
// The method for the "Get Description" behavior should return a string like the following:

// "Me Talk Pretty one day was written by David Sedaris."


// Attributes
//   Title: Mythos
//   Author: Stephen Fry

// Behavior:
//   Get Description

// -----------------------------
// Attributes
//   Title: Me Talk Pretty One Day
//   Author: David Sedaris

// Behavior:
//   Get Description

// -----------------------------
// Attributes
// Title: Aunts aren't Gentlemen
// Author: PG Wodehouse

// Behavior:
//   Get Description

function createBook(title, author, read = false) {
  return {
    title,
    author,
    read,
    
    getDescription() {
      console.log(`${this.title} was written by ${this.author}. I ${this.read ? 'have': 'have not'} read it.`);
    },
    
      readBook() {
        this.read = true;
      }
  };
}

let Mythos = createBook('Mythos', 'Stephen Fry');
Mythos.getDescription();

let MeTalk = createBook('Me Talk Pretty One Day', 'David Sedaris');
let Aunts = createBook("Aunts aren't Gentlemen", "PG Wodehouse");

