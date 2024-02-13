var grades = [];
for (var index = 0; index < 5; index++) {
  var grade = prompt("Enter grade " + (index + 1) + ":");
  grade = parseInt(grade);
  grades.push(grade);
}

var highGrade = 0;
var lowGrade = 100;
var avg = 0;

for (var index = 0; index < grades.length; index++) {
  if (grades[index] < lowGrade) {
    lowGrade = grades[index];
  }
  if (grades[index] > highGrade) {
    highGrade = grades[index];
  }
  avg += grades[index];
}
avg /= grades.length;

console.log("Highest grade:", highGrade);
console.log("Lowest grade:", lowGrade);
console.log("Average:", avg);
