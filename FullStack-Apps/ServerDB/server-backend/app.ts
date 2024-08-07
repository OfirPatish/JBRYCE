import cors from "cors";
import express from "express";
import config from "./Utils/DatabaseConfig";
import handleRouteNotFound from "./MiddleWare/notFound";
import serverRouter from "./Routes/ServerRoutes";
import dalMongoDB from "./DAL/dal_mongodb";
import {
  addSong,
  addCategory,
  getAllSongs,
  getSongById,
  updateSong,
  getSongTitleAndUrl,
  deleteSong,
} from "./Logic/MongoDB_Logic";
import SongModel from "./Models/SongMongoDB";
import CategoryModel from "./Models/CategoryMongoDB";

// Create server
const app = express();

app.use(cors());
app.use(express.json());

// Set up routes
app.use("/api", serverRouter);

// Connect to MongoDB
dalMongoDB.connect();

// addCategory(new CategoryModel({ name: "Pop" }));

// getAllSongs().then((result) => {
//   console.log(result);
// });

// getSongById("66a34d681fb0f37abb1df4c2").then((result) => {
//   console.log(result);
// });

// updateSong(new SongModel({ _id: "66a34d671fb0f37abb1df4bd", title: "asd Title" })).then((result) => {
//   console.log(result);
// });

// deleteSong("66a34d671fb0f37abb1df4bd").then((result) => {
//   console.log(result);
// });

// getSongTitleAndUrl().then((result) => {
//   console.log(result);
// });

// 404 handler
app.use("*", handleRouteNotFound);

// Start the server
app.listen(config.port, () => {
  console.log(`Listening on http://${config.host}:${config.port}`);
});
