import * as express from "express";
import { Request, Response } from "express";

import {
  findAll,
  findOne,
  findLastMonth,
  findMonthsAgo,
  findLastWeek,
  insertData,
} from "./controllers/covidController";

import { config } from "dotenv";

config();

const app = express();

app.use(express.json());

app.get("/api/all", (_, res: Response) => findAll(_, res));

app.get("/api/last-day", (_, res: Response) => findOne(_, res));

app.get("/api/last-month", (_, res: Response) => findLastMonth(_, res));

app.get("/api/month-ago/:month", (_, res: Response) => findMonthsAgo(_, res));

app.get("/api/last-week", (_, res: Response) => findLastWeek(_, res));

app.post("/covid", (req: Request, res: Response) => insertData(req, res));

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`server on port ${port}`));
