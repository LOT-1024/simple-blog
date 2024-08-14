import { Pool } from "pg";
import dotenv from 'dotenv'

dotenv.config()

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || '5432', 10),
});

async function check() {
  try {
    const client = await pool.connect();
    console.log("PostgreSQL connected");

    client.release();
  } catch (err) {
    if (err instanceof Error) {
      console.error("Error connecting to PostgreSQL", err.message);
    } else {
      console.error("Unexpected error", err);
    }
  }
}

check();

export default pool;
