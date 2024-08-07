import express, { Request, Response } from "express";
import { getBikeInfo, getCarInfo, getTruckInfo } from "../logic/TransportService";
import { validateToken } from "../Utils/JWTService";

const transportRouter = express.Router();

transportRouter.get("/car/:id", async (req: Request, res: Response) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ msg: "No token provided." });
  }

  const decodedPayload = validateToken(token);
  if (decodedPayload) {
    res
      .status(200)
      .header("Access-Control-Expose-Headers", "Authorization")
      .header("Authorization", token)
      .json(await getCarInfo(req.params.id));
  } else {
    res.status(401).json({ msg: "Invalid token." });
  }
});

transportRouter.get("/bike/:id", async (req: Request, res: Response) => {
  await res.status(200).json(await getBikeInfo(req.params.id));
});

transportRouter.get("/truck/:id", async (req: Request, res: Response) => {
  res.status(200).json(await getTruckInfo(req.params.id));
});

export default transportRouter;
