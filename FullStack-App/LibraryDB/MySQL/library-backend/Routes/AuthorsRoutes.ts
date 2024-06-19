import express, { Request, Response } from "express";
import { getAllAuthors } from "../Logic/AuthorService";

const authorsRouter = express.Router();

authorsRouter.get("/getAuthors", async (req: Request, res: Response) => {
  try {
    const authors = await getAllAuthors();
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

export default authorsRouter;
