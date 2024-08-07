import express, { Request, Response } from "express";
import { getAllDevelopmentGroups, getMeetingsByGroupCode, addNewMeeting } from "../Logic/MeetingLogic";

const meetingRouter = express.Router();

meetingRouter.get("/development-groups", async (req: Request, res: Response) => {
  try {
    const groups = await getAllDevelopmentGroups();
    res.json(groups);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send("An unknown error occurred");
    }
  }
});

meetingRouter.get("/meetings/:groupCode", async (req: Request, res: Response) => {
  const { groupCode } = req.params;
  try {
    const meetings = await getMeetingsByGroupCode(Number(groupCode));
    res.json(meetings);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send("An unknown error occurred");
    }
  }
});

meetingRouter.post("/meetings", async (req: Request, res: Response) => {
  const meeting = req.body;
  try {
    await addNewMeeting(meeting);
    res.status(201).send("Meeting added successfully");
  } catch (error) {
    if (error instanceof Error) {
      if (
        error.message === "Start and end date/time cannot be the same." ||
        error.message === "Cannot add a meeting in the past." ||
        error.message === "End date/time cannot be before start date/time."
      ) {
        res.status(400).send(error.message);
      } else {
        res.status(500).send(error.message);
      }
    } else {
      res.status(500).send("An unknown error occurred");
    }
  }
});

export default meetingRouter;
