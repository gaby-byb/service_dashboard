import express from "express";
import pool from "../database/Database.js";

// GET    /employess
// GET    /employess/:id
// POST   /employess
// PUT    /employess/:id
// DELETE /employess/:id

const router = express.Router();

const result = await pool.query("SELECT current_database()");
console.log(result.rows);

// GET /employees
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM employees");
    res.json(result.rows);
  } catch (error) {
    res.status(500).send("GET Database error");
  }
});

// GET /employees/:id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * WHERE id=$1 FROM employees", [
      id,
    ]);
    res.json(result.rows);
  } catch (error) {
    res.status(500).send("GET Database error");
  }
});

export default router;
