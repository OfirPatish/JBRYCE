import express, { Request, Response } from "express";
import { getAllBooks, addBook, deleteBook } from "../Logic/BookService";

const booksRouter = express.Router();

booksRouter.get("/getBooks", async (req: Request, res: Response) => {
  try {
    const books = await getAllBooks();
    res.status(200).json(books);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

export default booksRouter;
