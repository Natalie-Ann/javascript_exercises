/*
For this practice problem, write a program that outputs The Flintstones Rock! 10 times, with each line indented 1 space to the right 
of the line above it. The output should start out like this:

The Flintstones Rock!
 The Flintstones Rock!
  The Flintstones Rock!
   ...

*/

for (let i = 0; i < 10; i += 1) {
  let flintstones = 'The Flintstones Rock!';
  console.log(flintstones.padStart(flintstones.length + i, ' '))
}