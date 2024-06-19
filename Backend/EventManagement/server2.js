var http = require("http");
var fs = require("fs");
var events = require("events");
var eventEmitter = new events.EventEmitter();
const LOGGER_FILE_URL = "logger/log.txt";

const PORT = 8080;

const userEvents = {
  CallDel: "CallDel",
  DispatchDel: "DispatchDel",
  ArriveDel: "ArriveDel",
  DelGive: "DelGive",
  DelReturned: "DelReturned",
};

http
  .createServer((request, response) => {
    response.end("sending yeruslav");
    eventEmitter.emit(userEvents.CallDel);
  })
  .listen(PORT);

console.log(`server was started: http://localhost:${PORT}`);

// Handlers setup with setTimeout to simulate the sequence of events
const CallDelHandler = () => {
  console.log("Call delivery");
  fs.appendFile(LOGGER_FILE_URL, "Call delivery\n", (err) => {});
  setTimeout(() => eventEmitter.emit(userEvents.DispatchDel), 5000);
};

const dispatchHandler = () => {
  console.log("delivery is on the way");
  fs.appendFile(LOGGER_FILE_URL, "delivery is on the way\n", (err) => {});
  setTimeout(() => eventEmitter.emit(userEvents.ArriveDel), 5000);
};

const arriveHandler = () => {
  console.log("delivery has arrived");
  fs.appendFile(LOGGER_FILE_URL, "delivery has arrived\n", (err) => {});
  setTimeout(() => eventEmitter.emit(userEvents.DelGive), 5000);
};

const giveHandler = () => {
  console.log("the package was delivered");
  fs.appendFile(LOGGER_FILE_URL, "the package was delivered\n", (err) => {});
  setTimeout(() => eventEmitter.emit(userEvents.DelReturned), 5000);
};

const returnHandler = () => {
  console.log("yeruslav can go home :)");
  fs.appendFile(LOGGER_FILE_URL, "yeruslav can go home :)\n", (err) => {});
};

const beHappyHandler = () => {
  console.log("the package is here, the package is here.....");
  fs.appendFile(LOGGER_FILE_URL, "the package is here, the package is here.....\n", (err) => {});
};

// Registering event handlers
eventEmitter.on(userEvents.CallDel, CallDelHandler);
eventEmitter.on(userEvents.DispatchDel, dispatchHandler);
eventEmitter.on(userEvents.ArriveDel, arriveHandler);
eventEmitter.on(userEvents.DelGive, giveHandler);
eventEmitter.on(userEvents.DelReturned, returnHandler);
eventEmitter.on(userEvents.DelGive, beHappyHandler);
