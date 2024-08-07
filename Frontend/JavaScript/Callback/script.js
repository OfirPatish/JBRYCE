function greeting(name, callback) {
  let message = `Hello, ${name}!`;
  callback(message);
}

function logMessage(message) {
  console.log(message);
}

greeting("John", logMessage);
