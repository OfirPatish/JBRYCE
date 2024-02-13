function createStudent(name, classNumber, grades) {
  return {
    studentName: name,
    studentClassNumber: classNumber,
    studentGrades: grades,
    calculateAverageGrade: function () {
      let sum = 0;
      for (let index = 0; index < this.studentGrades.length; index++) {
        sum += this.studentGrades[index];
      }
      return sum / this.studentGrades.length;
    },
    getLowestGrade: function () {
      let lowestGrade = this.studentGrades[0];
      for (let index = 1; index < this.studentGrades.length; index++) {
        if (this.studentGrades[index] < lowestGrade) {
          lowestGrade = this.studentGrades[index];
        }
      }
      return lowestGrade;
    },
  };
}

const student1 = createStudent("Ofir", 1, [80, 90, 85, 95, 92]);
const student2 = createStudent("Matti", 2, [75, 85, 90, 88, 92]);
const student3 = createStudent("Yarden", 3, [95, 92, 88, 90, 85]);

const students = [student1, student2, student3];

const table = document.getElementById("studentsTable");

students.forEach((student) => {
  const row = table.insertRow();
  const nameCell = row.insertCell(0);
  const classCell = row.insertCell(1);
  const avgGradeCell = row.insertCell(2);
  const lowestGradeCell = row.insertCell(3);

  nameCell.innerHTML = student.studentName;
  classCell.innerHTML = student.studentClassNumber;
  avgGradeCell.innerHTML = student.calculateAverageGrade().toFixed(2);
  lowestGradeCell.innerHTML = student.getLowestGrade();
});
