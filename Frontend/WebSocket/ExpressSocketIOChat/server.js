// Import required modules
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

// Create an Express application
const app = express();

// Create an HTTP server
const server = http.createServer(app);

// Initialize socket.io
const io = socketIo(server);

// Handle WebSocket connections
io.on("connection", (socket) => {
  console.log("A user connected");

  // Listen for incoming chat messages
  socket.on("chat message", (msg) => {
    console.log(`Received message: ${msg}`);
    // Broadcast the message to all connected clients
    io.emit("chat message", msg);
  });

  // Listen for disconnection
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

// Serve static files from the public directory
app.use(express.static(__dirname + "/public"));

// Define a route to serve index.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
