const express = require("express");
const bodyParser = require("body-parser");

const aboutRouter = require("./routes/about");
const weatherRouter = require("./routes/weather");

const PORT = 3000;
const HOST = "localhost";

const app = express();
app.use(express.static("client"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/about", aboutRouter);
app.use("/weather", weatherRouter);

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
