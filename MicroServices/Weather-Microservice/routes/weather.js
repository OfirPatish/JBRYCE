const express = require("express");
const http = require("http");

const weatherRouter = express.Router();

const API_KEY = "3727cc2013ce4136a66160419240608";

// weatherRouter.get("/", (req, res) => {
//   res.sendFile(__dirname + "/../client/index.html");
// });

weatherRouter.get("/:city", (req, res) => {
  const city = req.params.city;
  const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;
  http.get(url, (response) => {
    let data = "";
    response.on("data", (chunk) => {
      data += chunk;
    });
    response.on("end", () => {
      const responseData = JSON.parse(data);
      res.json(responseData);
    });
  });
});

weatherRouter.post("/", (req, res) => {
  const city = req.body.city;
  const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;
  http.get(url, (response) => {
    let data = "";
    response.on("data", (chunk) => {
      data += chunk;
    });
    response.on("end", () => {
      const responseData = JSON.parse(data);
      const temperature = responseData.current.temp_c;
      const condition = responseData.current.condition.text;
      const icon = "https:" + responseData.current.condition.icon;
      res.json({
        city,
        temperature,
        condition,
        icon,
      });
    });
  });
});

module.exports = weatherRouter;
