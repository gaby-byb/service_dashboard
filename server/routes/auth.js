import express from "express";
import pool from "../database/Database.js";

const router = express.Router();

router.post("/", async (req, res) => {
  console.log("Login route hit");
  const { email, password } = req.body;
  const employee = await pool.query("SELECT * FROM employees where email=$1", [
    email,
  ]);

  if (!employee.rows.length) {
    return res.status(401).json({ success: false });
  }
  if (employee.rows[0].password !== password) {
    return res.status(401).json({ success: false });
  }
  res.json({
    success: true,
    employee: employee.rows[0],
  });
});

export default router;
