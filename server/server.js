import express from "express";
import cors from "cors";
import pool from "./database/Database.js";

// calls application
const app = express();

app.use(cors());
app.use(express.json());
const result = await pool.query("SELECT current_database()");
console.log(result.rows);

// GET    /jobs
app.get("/jobs", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM jobs");
    res.json(result.rows);
  } catch (error) {
    res.status(500).send("Server error");
  }
});
// POST   /jobs
app.post("/jobs", async (req, res) => {
  try {
    //
    const { customer_id, scheduled_date, status, notes } = req.body;
    const result = await pool.query(
      "INSERT INTO jobs  (customer_id, scheduled_date, status, notes) VALUES ($1, $2, $3, $4) RETURNING *",
      //using placeholders protects against SQL injection
      [customer_id, scheduled_date, status, notes],
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server POST error");
  }
});

// GET    /customers
app.get("/customers", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM customers");
    res.json(result.rows);
  } catch (error) {
    res.status(500).send("Server error");
  }
});

// POST   /customers
app.post("/customers", async (req, res) => {
  try {
    //
    const { name, phone, email, address } = req.body;
    const result = await pool.query(
      "INSERT INTO customers  (name, phone, email, address) VALUES ($1, $2, $3, $4) RETURNING *",
      //using placeholders protects against SQL injection
      [name, phone, email, address],
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server POST error");
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
