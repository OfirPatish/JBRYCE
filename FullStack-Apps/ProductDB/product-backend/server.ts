import cors from "cors";
import express from "express";
import config from "./Utils/DatabaseConfig";
import handleRouteNotFound from "./MiddleWare/notFound";
import productRouter from "./Routes/ProductRoutes";

// Create server
const app = express();

app.use(cors());
app.use(express.json());

// Set up routes
app.use("/api", productRouter);

// 404 handler
app.use("*", handleRouteNotFound);

// Start the server
app.listen(config.port, () => {
  console.log(`Listening on http://${config.host}:${config.port}`);
});
