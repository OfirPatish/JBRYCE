// Import required modules
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const path = require("path");
const PORT = 3000;

// Create an Express application
const app = express();

// Create an HTTP server
const server = http.createServer(app);

// Initialize socket.io
const io = socketIo(server);

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Define a route to serve the main HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Handle WebSocket connections
io.on("connection", (socket) => {
  console.log("A client connected");

  socket.on("updateState", (data) => {
    console.log(`Received updateState event for: ${data.rect}`);
    // Broadcast the message to all connected clients
    io.emit("updateState", data);
  });

  socket.on("disconnect", () => {
    console.log("A client disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
