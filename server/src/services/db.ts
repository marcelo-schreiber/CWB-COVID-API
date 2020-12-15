import { Pool } from "pg";
import { config } from "dotenv";

config();

const devConfig = {
  host: process.env.PG_HOST,
  port: parseInt(process.env.PG_HOST),
  user: process.env.PG_USER,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
};

const proConfig = {
  connectionString: process.env.DATABASE_URL, // comes from heroku addon
};

const pool = new Pool(process.env.NODE_ENV === "production" ? proConfig : devConfig);

export default pool;
