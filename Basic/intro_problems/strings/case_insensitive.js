let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

if ((string1.toLowerCase() === string2.toLowerCase()) && (string2.toLowerCase() === string3.toLowerCase())) {
  console.log(true);
}else{
  console.log(false);
}
