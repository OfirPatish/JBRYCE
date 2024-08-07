import express, { Request, Response } from "express";
import { changeUserRole } from "../Logic/UserService";
import dal_mysql from "../DAL/dal_mysql";

const adminRouter = express.Router();

adminRouter.post("/createAdmin", async (req: Request, res: Response) => {
  res.status(201).json({ msg: "Admin created successfully!" });
});

adminRouter.post("/change-role", async (req: Request, res: Response) => {
  const { username, newRole } = req.body;
  try {
    const success = await changeUserRole(username, newRole);
    if (success) {
      res.status(200).json({ msg: "Role updated successfully" });
    } else {
      res.status(400).json({ msg: "Failed to update role" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

adminRouter.get("/users", async (req: Request, res: Response) => {
  try {
    const users = await dal_mysql.execute("SELECT username FROM users");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

export default adminRouter;
