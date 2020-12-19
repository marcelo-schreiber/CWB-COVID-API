import * as express from "express";

import { Request, Response } from "express";

import { findAll, findOne, findFiltered, postData } from "./controllers/covidController";

import { config } from "dotenv";

const cors = require("cors");

config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/all", (_, res: Response) => findAll(res));
app.get("/api/last", (_, res: Response) => findOne(res));
app.get("/api/filter", (req: Request, res: Response) => findFiltered(req, res));

app.post("/covid", (req: Request, res: Response) => postData(req, res));

app.use("*", (_, res) => res.status(404).json({ message: "not found" }));

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`server on port ${port}`));
