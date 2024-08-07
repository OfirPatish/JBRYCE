import express, { Request, Response } from "express";
import { getAllServers, updateServerStatus } from "../Logic/ServerService";

const serverRouter = express.Router();

serverRouter.get("/servers", async (req: Request, res: Response) => {
  const { onlyActive, sortOrder = "asc" } = req.query;
  try {
    const servers = await getAllServers(onlyActive === "true", sortOrder as "asc" | "desc");
    res.json(servers);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send("An unknown error occurred");
    }
  }
});

serverRouter.post("/server/status", async (req: Request, res: Response) => {
  const { ID, Status } = req.body;
  if (!ID || !Status) {
    return res.status(400).send("Missing ID or Status");
  }

  try {
    await updateServerStatus(ID, Status);
    res.send("Server status updated successfully");
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send("An unknown error occurred");
    }
  }
});

export default serverRouter;
