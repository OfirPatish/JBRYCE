import express, { Request, Response } from "express";
import { authenticateUser, registerUser, getUserPassword } from "../Logic/UserService";
import { generateToken, validateToken } from "../Utils/JWTService";
import { UserNotLogged, UserNotFound } from "../Models/AppErrors";

const authRouter = express.Router();

authRouter.post("/login", async (req: Request, res: Response) => {
  const credentials = req.body;
  try {
    const userData = await authenticateUser(credentials);
    if (userData && validateToken(userData.jwt)) {
      res
        .status(200)
        .header("Access-Control-Expose-Headers", "Authorization")
        .header("Authorization", userData.jwt)
        .json(userData);
    } else {
      const error = new UserNotLogged();
      res.status(error.statusCode).json({ msg: error.errorMessage });
    }
  } catch (error) {
    if (error instanceof UserNotFound) {
      res.status(error.statusCode).json({ msg: error.errorMessage });
    } else {
      res.status(500).json({ msg: "Internal Server Error" });
    }
  }
});

authRouter.post("/register", async (req: Request, res: Response) => {
  try {
    let result = await registerUser(req.body);
    if (result === "User was created") {
      res.status(201).json({ msg: result });
    } else {
      res.status(400).json({ msg: result });
    }
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

authRouter.get("/getUserPassword/:username", async (req: Request, res: Response) => {
  try {
    const userPass = await getUserPassword(req.params.username);
    res.status(200).json({ password: userPass });
  } catch (error) {
    if (error instanceof UserNotFound) {
      res.status(error.statusCode).json({ msg: error.errorMessage });
    } else {
      res.status(500).json({ msg: "Internal Server Error" });
    }
  }
});

authRouter.post("/generateToken", async (req: Request, res: Response) => {
  const userData = req.body;
  res.status(200).json({ jwt: generateToken(userData) });
});

authRouter.get("/validateToken/:token", async (req: Request, res: Response) => {
  const token = req.params.token;
  console.log("Received JWT for validation:", token);
  const decodedPayload = validateToken(token);
  if (decodedPayload) {
    res.status(200).json({ msg: "Token is valid.", user: decodedPayload });
  } else {
    res.status(401).json({ msg: "Token is invalid." });
  }
});

export default authRouter;
