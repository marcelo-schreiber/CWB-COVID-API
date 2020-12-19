import pool from "../services/db";
import { config } from "dotenv";

config();

export const findAll = async res => {
  try {
    const data = await pool.query(
      "SELECT flag, total_recovered, total_active, total_confirmed, total_deaths, hospital_ocupation, avaliable_hospital_beds, dateupdate FROM cwb ORDER BY id DESC"
    );

    return res.json(data.rows).status(200);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ message: "server error" });
  }
};

export const findOne = async res => {
  try {
    const data = await pool.query(
      "SELECT flag, total_recovered, total_active, total_confirmed, total_deaths, hospital_ocupation, avaliable_hospital_beds, dateupdate FROM cwb ORDER BY id DESC LIMIT 1"
    );

    return res.status(200).json(data.rows[0]);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ message: "server error" });
  }
};

export const findFiltered = async (req, res) => {
  try {
    let { offset, limit } = req.query;

    if (!offset || !parseInt(offset)) {
      offset = 0;
    }

    if (!limit || !parseInt(limit)) {
      limit = 100;
    }

    const data = await pool.query(
      "SELECT flag, total_recovered, total_active, total_confirmed, total_deaths, hospital_ocupation, avaliable_hospital_beds, dateupdate FROM cwb ORDER BY id DESC LIMIT $1 OFFSET $2",
      [limit, offset]
    );

    return res.status(200).json(data.rows);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ message: "server error" });
  }
};

export const postData = async (req, res) => {
  try {
    if (!(req.query.key === process.env.API_KEY)) {
      return res.status(401).json({ message: "no auth" });
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

    if (
      !flagValue ||
      !activeCases ||
      !confirmedCases ||
      !recovered ||
      !deaths ||
      !ocupation ||
      !availableHospitalBeds ||
      !lastUpdate
    ) {
      return res.status(400).json({ message: "bad request" });
    }

    await pool.query(
      "INSERT INTO cwb (flag, total_recovered, total_active, total_confirmed, total_deaths, hospital_ocupation,avaliable_hospital_beds,dateupdate) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
      [
        flagValue,
        parseInt(recovered),
        parseInt(activeCases),
        parseInt(confirmedCases),
        parseInt(deaths),
        ocupation,
        parseInt(availableHospitalBeds),
        lastUpdate,
      ]
    );

    return res.status(201).json({ message: "success" });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ message: "server error" });
  }
};
