// Complete this class so that the test cases shown below work as intended. You are free to add any properties you need.

// You may assume that the input will always fit in your terminal window.




class Banner {
  constructor(message) {
    this.message = message;
  }

  displayBanner() {
    console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
  }

  horizontalRule() {
    let dashCount = this.message.length + 2;
    let dashLine = '-'.repeat(dashCount);
    return `+${dashLine}+`;
  }

  emptyLine() {
    let emptySpaceCount = this.message.length;
    let empty = ' '.repeat(emptySpaceCount);
    return `| ${empty} |`;
  }

  messageLine() {
    return `| ${this.message} |`;
  }
}


let banner1 = new Banner('To boldly go where no one has gone before.');
banner1.displayBanner();
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+


let banner2 = new Banner('');
banner2.displayBanner();
// +--+
// |  |
// |  |
// |  |
// +--+
