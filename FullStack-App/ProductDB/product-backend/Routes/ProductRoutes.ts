import express, { Request, Response } from "express";
import { getAllProducts, updateProductUnits } from "../Logic/ProductService";

const productRouter = express.Router();

productRouter.get("/products", async (req: Request, res: Response) => {
  try {
    const products = await getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

productRouter.post("/products/:id/units", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { units } = req.body;
  try {
    await updateProductUnits(Number(id), Number(units));
    res.status(200).send("Product units updated successfully");
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send("An unknown error occurred");
    }
  }
});

export default productRouter;
