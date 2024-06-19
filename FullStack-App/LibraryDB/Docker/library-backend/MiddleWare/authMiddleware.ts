import { Request, Response, NextFunction } from "express";
import { validateToken } from "../Utils/JWTService";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (token) {
    const decodedPayload = validateToken(token);
    if (decodedPayload) {
      (req as any).user = decodedPayload;
      next();
    } else {
      res.status(401).json({ msg: "Invalid token" });
    }
  } else {
    res.status(401).json({ msg: "Unauthorized" });
  }
};

export default verifyToken;
