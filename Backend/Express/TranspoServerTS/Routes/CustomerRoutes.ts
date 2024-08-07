import express, { Request, Response, NextFunction } from "express";
import CustomerLogic from "../Logic/CustomerService";

const customerRouter = express.Router();

customerRouter.get("/all", async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json(await CustomerLogic.getAllCustomers());
  } catch (error) {
    next(error);
  }
});

customerRouter.get("/products-by-category", async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json(await CustomerLogic.getProductsByCategory());
  } catch (error) {
    next(error);
  }
});

customerRouter.get("/orders-in-date-range", async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json(await CustomerLogic.getOrdersInDateRange());
  } catch (error) {
    next(error);
  }
});

export default customerRouter;
