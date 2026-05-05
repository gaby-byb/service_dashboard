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
//POST

router.post("/", async (req, res) => {
  try {
    const { name, phone, email } = req.body;
    const result = await pool.query(
      "INSERT INTO employees (name, phone, email) VALUES $1, $2, $3"[
        (name, phone, email)
      ],
    );
  } catch (error) {
    res.status(500).send("POST database error");
  }
});

//PUT /employees/:id
router.put("/:id", async (req, res) => {
  try {
    const { name, phone, email } = req.body;
    const { id } = req.params;

    const result = await pool.query(
      "UPDATE employees set name=$1, phone=$2, email=$3"[(name, phone, email)],
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
