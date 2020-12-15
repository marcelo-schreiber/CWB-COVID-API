import pool from "../services/db";
import { config } from "dotenv";

config();

export const findAll = async (_, res) => {
  try {
    const data = await pool.query("SELECT * FROM cwb");

    res.json(data.rows).status(200);
  } catch (err) {
    console.error(err.message);
    return res.json({ message: "server error" }).status(500);
  }
};

export const findOne = async (_, res) => {
  try {
    const data = await pool.query("SELECT * FROM cwb LIMIT 1");

    res.json(data.rows[0]).status(200);
  } catch (err) {
    console.error(err.message);
    return res.json({ message: "server error" }).status(500);
  }
};

export const findLastMonth = async (_, res) => {
  try {
    const data = await pool.query("SELECT * FROM cwb LIMIT 30");

    res.json(data.rows).status(200);
  } catch (err) {
    console.error(err.message);
    return res.json({ message: "server error" }).status(500);
  }
};

export const findMonthsAgo = async (req, res) => {
  try {
    const monthsAgo = parseInt(req.params.month);

    const data = await pool.query("SELECT * FROM cwb LIMIT 30 OFFSET $1", [monthsAgo]);

    res.json(data.rows).status(200);
  } catch (err) {
    console.error(err.message);
    return res.json({ message: "server error" }).status(500);
  }
};

export const findLastWeek = async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM cwb LIMIT 7");

    res.json(data.rows).status(200);
  } catch (err) {
    console.error(err.message);
    return res.json({ message: "server error" }).status(500);
  }
};

export const insertData = async (req, res) => {
  try {
    if (!(req.query.key == process.env.API_KEY)) {
      return res.json({ message: "no auth" }).status(401);
    }

    const {
      flagValue,
      activeCases,
      confirmedCases,
      recovered,
      deaths,
      ocupation,
      availableHospitalBeds,
      lastUpdate,
    } = req.body;

    await pool.query(
      "INSERT INTO cwb (flag, active, confirmed, recovered, deaths, ocupation, avaliable, dateUpdate) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
      [
        flagValue,
        activeCases,
        confirmedCases,
        recovered,
        deaths,
        ocupation,
        availableHospitalBeds,
        lastUpdate,
      ]
    );

    res.json({ message: "success" }).status(201);
  } catch (err) {
    console.error(err.message);
    return res.json({ message: "server error" }).status(500);
  }
};
