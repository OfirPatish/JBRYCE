var numbers = [2, 5, 8, 12, 17, 22, 30, 37, 42, 51];

var evenCount = 0;
var oddCount = 0;

for (var index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 == 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}

console.log("Even numbers: ", evenCount);
console.log("Odd numbers: ", oddCount);
