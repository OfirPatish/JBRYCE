const http = require("http");
const fs = require("fs");
const events = require("events");
const eventEmitter = new events.EventEmitter();
const logFile = "logger/log.txt";

const port = 8080;

const userEvents = {
  Connected: "Connected",
  Refresh: "Refreshed",
  Logged: "Logged",
  Error: "Error",
  Started: "Started",
};

http
  .createServer((req, res) => {
    eventEmitter.emit(userEvents.Started);
    res.end("Website is running");
    eventEmitter.emit(userEvents.Connected);
  })
  .listen(port);

console.log(`Server is running on http://localhost:${port}`);

const ConnectHandler = () => {
  console.log("Someone connected");
  fs.appendFile(logFile, new Date() + "\n", (err) => {
    console.log("Data written to file");
  });
};

const startedHandler = () => {
  console.log("Server started");
};

eventEmitter.on(userEvents.Connected, ConnectHandler);
eventEmitter.on(userEvents.Started, startedHandler);
