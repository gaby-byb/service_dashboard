import express from "express";
import cors from "cors";
import pool from "./database/Database.js";

// calls application
const app = express();

app.use(cors());
app.use(express.json());
const result = await pool.query("SELECT current_database()");
console.log(result.rows);

app.get("/jobs", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM jobs");
    res.json(result.rows);
  } catch (error) {
    res.status(500).send("Server error");
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
