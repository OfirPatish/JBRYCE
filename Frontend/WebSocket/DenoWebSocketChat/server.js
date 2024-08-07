import { Application, Router } from "https://deno.land/x/oak/mod.ts";

// Map to store connected clients
const connectedClients = new Map();

const app = new Application();
const port = 3000;
const router = new Router();

// Function to send a message to all connected clients
function broadcast(message) {
  for (const client of connectedClients.values()) {
    client.send(message);
  }
}

// Function to broadcast the list of usernames to all clients
function broadcastUsernames() {
  const usernames = [...connectedClients.keys()];
  console.log("Sending updated username list to all clients: " + JSON.stringify(usernames));
  broadcast(
    JSON.stringify({
      event: "update-users",
      usernames: usernames,
    })
  );
}

// WebSocket route
router.get("/start_web_socket", async (context) => {
  const socket = await context.upgrade();
  const username = context.request.url.searchParams.get("username");

  // Check if the username is already taken
  if (connectedClients.has(username)) {
    socket.close(1008, `Username ${username} is already taken`);
    return;
  }

  socket.username = username;
  connectedClients.set(username, socket);
  console.log(`New client connected: ${username}`);

  // Broadcast the active users list when a new user logs in
  socket.onopen = () => {
    broadcastUsernames();
  };

  // Remove client from the connected clients list when they disconnect
  socket.onclose = () => {
    console.log(`Client ${socket.username} disconnected`);
    connectedClients.delete(socket.username);
    broadcastUsernames();
  };

  // Broadcast new message if someone sends one
  socket.onmessage = (msg) => {
    const data = JSON.parse(msg.data);
    switch (data.event) {
      case "send-message":
        broadcast(
          JSON.stringify({
            event: "send-message",
            username: socket.username,
            message: data.message,
          })
        );
        break;
    }
  };
});

app.use(router.routes());
app.use(router.allowedMethods());

// Serve the static files
app.use(async (context) => {
  await context.send({
    root: `${Deno.cwd()}/`,
    index: "public/index.html",
  });
});

console.log("Listening at http://localhost:" + port);
await app.listen({ port });
