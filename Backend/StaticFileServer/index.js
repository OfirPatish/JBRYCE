let http = require("http");
let fs = require("fs");

http
  .createServer((req, res) => {
    fs.readFile("./html/index.html", "utf-8", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      myLogger(new Date());
      return res.end();
    });
  })
  .listen(8080);

console.log("Server is running on http://localhost:8080");

const myLogger = () => {
  for (let index = 1; index <= 1000; index++) {
    let logData = index % 7 === 0 || index.toString().includes("7") ? "BOOM" : index;
    fs.appendFile("./log/log.txt", `${logData}\n`, (err) => {
      if (err) throw err;
    });
  }
  console.log("Operation completed.");
};
