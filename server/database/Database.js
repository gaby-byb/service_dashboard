import pkg from "pg"; //postgre
import dotenv from "dotenv";

//Pool manages multiple database connections
const { Pool } = pkg;

dotenv.config();

//pool of connections server can reuse
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export default pool;
