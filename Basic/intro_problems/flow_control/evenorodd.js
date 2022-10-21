function evenOrOdd (number) {
  if ((Number.isInteger(number) === false)){
  return console.log("This is not an integer");
  }
  
  if (number % 2 === 0){
  console.log('even');
  } else {
  console.log('odd');
}

}

evenOrOdd(3.5);
evenOrOdd(5);
evenOrOdd(6);