import cors from "cors";
import express from "express";
import fileUpload from "express-fileupload";
import config from "./Utils/DatabaseConfig";
import handleRouteNotFound from "./MiddleWare/notFound";
import serverRouter from "./Routes/ServerRoutes";

// Create server
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("upload"));
app.use(fileUpload({ createParentPath: true }));

// Set up routes
app.use("/api", serverRouter);

// 404 handler
app.use("*", handleRouteNotFound);

// Start the server
app.listen(config.port, () => {
  console.log(`Listening on http://${config.host}:${config.port}`);
});
