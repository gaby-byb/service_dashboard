import express from "express";
import pool from "../database/Database.js";

// /invoices
// GET    /invoices
// GET    /invoices/:id
// POST   /invoices
// PUT    /invoices/:id
// DELETE /invoices/:id

const router = express.Router();
const result = await pool.query("SELECT current_database()");
console.log(result.rows);

//GET
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM invoices");
    res.json(result.rows);
  } catch (error) {
    console.log(error);
    res.status(500).send("GET database error");
  }
});
//GET /id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM invoices WHERE id=$1", [id]);
    res.json(result.rows);
  } catch (error) {
    res.status(500).send("GET database error");
  }
});

//POST
router.post("/", async (req, res) => {
  try {
    const { job_id, amount, paid } = req.body;
    const result = await pool.query(
      "INSERT INTO invoices (job_id, amount, paid) VALUES ($1, $2, $3) RETURNING *",
      [job_id, amount, paid],
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send("POST database error");
  }
});

//PUT /ID
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { job_id, amount, paid } = req.body;
    const result = await pool.query(
      "UPDATE invoices SET job_id=$1, amount=$2, paid=$3 WHERE id=$4 RETURNING *",
      [job_id, amount, paid, id],
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).send("PUT database error");
  }
});

//DELETE /id

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      "DELETE from invoices WHERE id=$1 RETURNING *",
      [id],
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).send("DELETE error");
  }
});

export default router;
