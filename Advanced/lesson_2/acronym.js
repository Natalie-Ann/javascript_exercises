
function acronym(string) {
    let wordArray = string.split(/ |-/);
    let acronymArray = wordArray.map(word => word[0].toUpperCase());
    console.log(acronymArray.join(''));
  }
  
  acronym('Portable Network Graphics');                  // "PNG"
  acronym('First In, First Out');                        // "FIFO"
  acronym('PHP: HyperText Preprocessor');                // "PHP"
  acronym('Complementary metal-oxide semiconductor');    // "CMOS"
  acronym('Hyper-text Markup Language');                 // "HTML"