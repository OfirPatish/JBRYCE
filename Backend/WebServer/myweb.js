const http = require("http");
const url = require("url");
const fs = require("fs");
const Chance = require("chance");
const chance = new Chance();
const webPort = 8080;

http
  .createServer(function (req, res) {
    const parsedUrl = url.parse(req.url, true);
    const language = parsedUrl.query.Language;

    let filePath = "./index.html";
    if (language === "Hebrew") {
      filePath = "./index_he.html";
    }

    fs.readFile(filePath, function (err, data) {
      if (err) {
        res.writeHead(404);
        res.end("Error: File not found");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
    console.log(`Done reading ${filePath}`);
  })
  .listen(webPort);

function generateCode(length = 5) {
  return chance.string({ length: length, pool: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" });
}

console.log(generateCode()); // Example output: AbcDe

console.log(`Server is running on http://localhost:${webPort}`);
