//Write a while loop that logs all odd natural numbers between 1 and 40.

let oddNumbers = 1
while (oddNumbers < 40) {
  if (oddNumbers % 2 !== 0) {
  console.log(oddNumbers);
  }
  oddNumbers += 1;
}
