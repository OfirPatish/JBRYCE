import express, { NextFunction, Request, Response } from "express";
import { getAllAuthors } from "../Logic/AuthorService";
import verifyToken from "../MiddleWare/authMiddleware";

const authorsRouter = express.Router();

authorsRouter.get("/getAuthors", verifyToken, async (req: Request, res: Response) => {
  try {
    const authors = await getAllAuthors();
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

export default authorsRouter;
