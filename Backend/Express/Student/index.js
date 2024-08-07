const express = require("express");
const app = express();
const port = 8080;
const host = "localhost";

// Array of student objects
const students = [
  { id: 1, name: "John Doe", grade: "A" },
  { id: 2, name: "Jane Smith", grade: "B" },
  { id: 3, name: "Alice Johnson", grade: "A" },
];

app.get("/students", (req, res) => {
  res.json(students);
});

app.get("/students/:id", (req, res) => {
  res.send(students.find((student) => student.id == req.params.id));
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
