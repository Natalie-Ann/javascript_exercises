//Write a function that will take a short line of text, and write it to the console log within a box.

/*
- create and log line 4 charactes longer than string consisting of +, -
- create line with | on both ends
- create line with | on both ends and string in the middle
- create line with | on both ends
- create and log line 4 charactes longer than string consisting of +, -


*/

function logInBox (string) {
  let boxLength = string.length + 4;
  let topBottom = '+' + '-'.repeat(boxLength - 2) + '+';
  console.log(topBottom);
  console.log(`| ${" ".repeat(string.length)} |`)
  console.log(`| ${string} |`);
  console.log(`| ${" ".repeat(string.length)} |`);
  console.log(topBottom);
}


logInBox('To boldly go where no one has gone before.');
logInBox('');

/*
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
*/