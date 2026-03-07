import express from "express";
import pool from "../database/Database.js";

// GET    /customers
// GET    /customers/:id
// POST   /customers
// PUT    /customers/:id
// DELETE /customers/:id

const router = express.Router();

const result = await pool.query("SELECT current_database()");
console.log(result.rows);

// GET    /customers
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM customers");

    res.json(result.rows);
  } catch (error) {
    res.status(500).send("GET Database error");
  }
});

// GET    /customers/:id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * WHERE id=$1 FROM customers", [
      id,
    ]);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).send("GET Database error");
  }
});

// POST   /customers
router.post("/", async (req, res) => {
  try {
    const { name, phone, email, address } = req.body;
    const result = await pool.query(
      "INSERT INTO customers  (name, phone, email, address) VALUES ($1, $2, $3, $4) RETURNING *",
      //using placeholders protects against SQL injection
      [name, phone, email, address],
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).send("POST database error");
  }
});

// PUT    /customers/:id
router.put("/:id", async (req, res) => {
  try {
    const { name, phone, email, address } = req.body;
    const { id } = req.params;

    const result = await pool.query(
      "UPDATE customers SET name=$1, phone=$2, email=$3, address=$4 WHERE id=$5 RETURNING *",
      [name, phone, email, address, id],
    );
    //send this data back to client as json
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).send("Change failed");
  }
});

// DELETE /customers/:id
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "DELETE from customers WHERE  id=$1 RETURNING *",
      [id],
    );
    //send this data back to client as json
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).send("Delete failed");
  }
});

export default router;
