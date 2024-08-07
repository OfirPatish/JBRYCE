var http = require("http");
var url = require("url");
var carInfo = require("./datetime");
var seasons = require("./seasons");
var userInfo = require("./userInfo");
const webServerPort = 8080;

http
  .createServer(function (req, res) {
    var query = url.parse(req.url, true).query;
    var season = query.season;
    var name = query.name;
    var lastName = query.lastName;
    var city = query.city;
    var friend = query.friend;

    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write(req.url);
    res.write("<hr>");
    res.write("Hello Class 48");
    res.write("<hr>");
    res.write("Ofir Patish");
    res.write("<hr>");
    res.write("All rights reserved");
    res.write("<hr>");
    res.write(carInfo.getDate());
    res.write("<hr>");
    if (season) {
      res.write(seasons.seasonsName(season));
    }
    res.write(userInfo.formatUserInfo(name, lastName, city, friend));
    res.end();
  })
  .listen(webServerPort);

console.log(`Server is running at http://localhost:${webServerPort}/`);
