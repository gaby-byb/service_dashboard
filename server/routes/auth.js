import express from "express";
import pool from "../database/Database.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const employee = await pool.query("SELECT * FROM employees where email=$1", [
    email,
  ]);

  if (!employee.rows.length) {
    return res.status(401).json({ sucess: false });
  }
  if (employee.rows[0].password !== password) {
    return res.status(401).json({ sucess: false });
  }
  res.json({
    sucess: true,
    employee: employee.rows[0],
  });
});
