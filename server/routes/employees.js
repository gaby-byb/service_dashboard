import express from "express";
import pool from "../database/Database.js";

// GET    /employees
// GET    /employees/:id
// POST   /employees
// PUT    /employees/:id
// DELETE /employees/:id

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
    const result = await pool.query("SELECT * FROM employees WHERE id=$1 ", [
      id,
    ]);
    res.json(result.rows);
  } catch (error) {
    res.status(500).send("GET Database error");
  }
});
//POST

router.post("/", async (req, res) => {
  try {
    const { name, phone, email, password } = req.body;
    const result = await pool.query(
      "INSERT INTO employees (name, phone, email, password) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, phone, email, password],
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send("POST database error");
  }
});

//PUT /employees/:id
router.put("/:id", async (req, res) => {
  try {
    const { name, phone, email, password } = req.body;
    const { id } = req.params;

    const result = await pool.query(
      "UPDATE employees set name=$1, phone=$2, email=$3, password=$4 WHERE id=$5 RETURNING *",
      [name, phone, email, password, id],
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).send("PUT database error");
  }
});

// DELETE /employees/:id
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "DELETE from employees WHERE  id=$1 RETURNING *",
      [id],
    );
    //send this data back to client as json
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).send("Delete failed");
  }
});
export default router;
