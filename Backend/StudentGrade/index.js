const fs = require("fs");

function writeGradesToFile(grades) {
  const data = JSON.stringify(grades, null, 2);
  fs.writeFile("Grades.json", data, (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log("File successfully written!");
    }
  });
}

const grades = {
  Alice: 90,
  Bob: 85,
  Charlie: 88,
};

writeGradesToFile(grades);
