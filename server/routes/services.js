import express from "express";
import pool from "../database/Database.js";

const router = express.Router();

const result = await pool.query("SELECT current_database()");
console.log(result.rows);

router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM services");
    res.json(result.rows);
  } catch (error) {
    console.log(error);
    res.status(500).send("GET Database error");
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, description, base_price } = req.body;
    const result = await pool.query(
      "INSERT INTO services (name, description, base_price) VALUES ($1, $2, $3) RETURNING *",
      [name, description, base_price],
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).send("POST Database error");
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { name, description, base_price } = req.body;
    const { id } = req.params;
    const result = await pool.query(
      "UPDATE services SET name=$1, description=$2, base_price=$3 WHERE id=$4 RETURNING *",
      [name, description, base_price, id],
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).send("PUT Database error");
  }
});

// DELETE /customers/:id
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "DELETE from services WHERE  id=$1 RETURNING *",
      [id],
    );
    //send this data back to client as json
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).send("Delete failed");
  }
});
export default router;
