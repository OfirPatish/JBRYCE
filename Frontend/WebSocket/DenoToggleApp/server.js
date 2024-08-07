import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const connectedClients = new Set();

const app = new Application();
const router = new Router();
const port = 3000;

// Send message to all connected clients
function broadcast(message) {
  for (const client of connectedClients) {
    client.send(message);
  }
}

router.get("/start_web_socket", async (context) => {
  const socket = await context.upgrade();
  connectedClients.add(socket);
  console.log("New client connected");

  // When a client disconnects, remove them from the connected clients list
  socket.onclose = () => {
    console.log("A client disconnected");
    connectedClients.delete(socket);
  };

  // Broadcast new message if someone sent one
  socket.onmessage = (msg) => {
    const data = JSON.parse(msg.data);
    broadcast(msg.data);
  };
});

app.use(router.routes());
app.use(router.allowedMethods());

app.use(async (context) => {
  await context.send({
    root: `${Deno.cwd()}/`,
    index: "public/index.html",
  });
});

console.log("Listening at http://localhost:" + port);
await app.listen({ port });
