
import { Request, Response } from "express";
import { dashboardService } from "../services/dashboard.service";

export async function getDashboard(req: Request, res: Response) {
  const { type, startDate, endDate } = req.query;

  if (!type || !startDate || !endDate) {
    return res.status(400).json({ error: "Missing params" });
  }

  try {
    const data = await dashboardService(
      type as string,
      new Date(startDate as string),
      new Date(endDate as string)
    );

    res.json(data);
  } catch (err) {
    res.status(400).json({ error: "Invalid type" });
  }
}
