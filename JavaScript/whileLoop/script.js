// This code prompts the user for a maximum number and a divisor,
// then uses a while loop to print all numbers up to the maximum that are divisible by the divisor.
var max = prompt("Please enter maximum number");
var den = prompt("Please enter divided number");

var counter = 2;

while (counter <= max) {
  if (counter % den == 0) {
    console.log(counter);
  }
  counter++;
}
console.log("Finished!");

// This code prompts the user to enter a number and then calculates the number of digits in that number.
// It uses a while loop to divide the number by 10 repeatedly, counting the iterations until the number is reduced to 0.
var userNumber = prompt("Please enter a number");
var digits = 0;
var temp = userNumber;

while (temp > 0) {
  digits++;
  temp = parseInt(temp / 10);
}
console.log("User number: ", userNumber, " has ", digits, " digits");
