const http = require("http");
const fs = require("fs");

const rawData = fs.readFileSync("data.json");
const data = JSON.parse(rawData);

const { name, city } = data;

http
  .createServer((req, res) => {
    res.end("Up and running!");
  })
  .listen(8080);

console.log("Server is running on http://localhost:8080");

console.log(`Name: ${name}, City: ${city}`);
