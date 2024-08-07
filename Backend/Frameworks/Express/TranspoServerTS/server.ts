import cors from "cors";
import express from "express";
import fileUpload from "express-fileupload";
import config from "./Utils/DatabaseConfig";
import transportRouter from "./Routes/TransportRoutes";
import handleRouteNotFound from "./MiddleWare/notFound";
import authRouter from "./Routes/UserAuthRoutes";
import adminRouter from "./Routes/AdminRoutes";
import customerRouter from "./Routes/CustomerRoutes";

// Create server
const app = express();
const isAdmin = false;

// Configure CORS
const corsOptions = {
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
  exposedHeaders: ["Authorization"],
};

const adminCorsOptions = {
  origin: "192.168.60.53",
  methods: ["POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
  exposedHeaders: ["Authorization"],
};

app.use(cors(isAdmin ? adminCorsOptions : corsOptions));
app.use(express.json());
app.use(express.static("upload"));
app.use(fileUpload({ createParentPath: true }));

// Set up routes
app.use("/api/v1/transport", transportRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/customer", customerRouter);

// 404 handler

app.use("*", handleRouteNotFound);

// Start the server
app.listen(config.port, () => {
  console.log(`Listening on http://${config.host}:${config.port}`);
});
