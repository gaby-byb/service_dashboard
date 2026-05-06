import express from "express";
import pool from "../database/Database.js";

const router = express.Router();

// GET    /jobs
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM jobs");
    res.json(result.rows);
  } catch (error) {
    res.status(500).send("Server error");
  }
});
// GET    /jobs/:id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM jobs WHERE id=$1", [id]);
    res.json(result.rows);
  } catch (error) {
    res.status(500).send("Server error");
  }
});

// POST   /jobs
router.post("/", async (req, res) => {
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

// PUT    /customers/:id
router.put("/:id", async (req, res) => {
  try {
    const { customer_id, scheduled_date, status, notes } = req.body;
    const { id } = req.params;

    const result = await pool.query(
      "UPDATE jobs SET customer_id=$1, scheduled_date=$2, status=$3, notes=$4 WHERE id=$5 RETURNING *",
      [customer_id, scheduled_date, status, notes, id],
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).send("");
  }
});
// DELETE /customers/:id
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "DELETE from jobs WHERE  id=$1 RETURNING *",
      [id],
    );
    //send this data back to client as json
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).send("Delete failed");
  }
});

export default router;
