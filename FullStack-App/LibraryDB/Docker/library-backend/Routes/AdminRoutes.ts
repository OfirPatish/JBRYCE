import express, { Request, Response } from "express";
import { addAuthor, deleteAuthor } from "../Logic/AuthorService";
import { addBook, deleteBook } from "../Logic/BookService";
import verifyToken from "../MiddleWare/authMiddleware";

const adminRouter = express.Router();

adminRouter.post("/addAuthor", verifyToken, async (req: Request, res: Response) => {
  const { FirstName, LastName } = req.body;
  try {
    const result = await addAuthor(FirstName, LastName);
    res.status(201).json(result);
  } catch (error: any) {
    if (error.message === "Author already exists") {
      res.status(400).json({ msg: error.message });
    } else {
      res.status(500).json({ msg: "Internal Server Error" });
    }
  }
});

adminRouter.delete("/deleteAuthor/:id", verifyToken, async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await deleteAuthor(parseInt(id));
    res.status(200).json({ msg: "Author deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

adminRouter.post("/addBook", verifyToken, async (req: Request, res: Response) => {
  const { AuthorID, Title, PageCount, Price } = req.body;
  try {
    const result = await addBook(AuthorID, Title, PageCount, Price);
    res.status(201).json(result);
  } catch (error: any) {
    if (error.message === "Book already exists") {
      res.status(400).json({ msg: error.message });
    } else {
      res.status(500).json({ msg: "Internal Server Error" });
    }
  }
});

adminRouter.delete("/deleteBook/:id", verifyToken, async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await deleteBook(parseInt(id));
    res.status(200).json({ msg: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

export default adminRouter;
