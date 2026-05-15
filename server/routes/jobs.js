import express from "express";
import pool from "../database/Database.js";

const router = express.Router();

// GET    /jobs
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(`
            SELECT
        jobs.id,
        customers.name AS customer,
        jobs.scheduled_date,
        job_status.name AS status,
        jobs.notes,

        COALESCE(
          json_agg(
            DISTINCT jsonb_build_object(
              'id', services.id,
              'name', services.name,
              'price', job_services.price
            )
          ) FILTER (WHERE services.id IS NOT NULL),
          '[]'
        ) AS services,

        COALESCE(
          json_agg(
            DISTINCT jsonb_build_object(
              'id', employees.id,
              'name', employees.name
            )
          ) FILTER (WHERE employees.id IS NOT NULL),
          '[]'
        ) AS employees

      FROM jobs
      JOIN customers
        ON jobs.customer_id = customers.id
      JOIN job_status
        ON jobs.status = job_status.id

      LEFT JOIN job_services
        ON jobs.id = job_services.job_id
      LEFT JOIN services
        ON job_services.service_id = services.id

      LEFT JOIN job_employees
        ON jobs.id = job_employees.job_id
      LEFT JOIN employees
        ON job_employees.employee_id = employees.id

      GROUP BY
        jobs.id,
        customers.name,
        jobs.scheduled_date,
        job_status.name,
        jobs.notes

      ORDER BY jobs.scheduled_date;
      
      `);
    res.json(result.rows);
  } catch (error) {
    console.log(error);
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

// POST insert job
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

// PUT update job  /jobs/:id
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
// DELETE /jobs/:id
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

// JOBS SERVICES

//GET services for one job
router.get("/:id/services", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      `
        SELECT
            job_services.id,
            services.name,
            services.description,
            job_services.price
        FROM job_services
        JOIN services
            ON job_services.service_id = services.id
        WHERE job_services.job_id = $1
        `,
      [id],
    );
    res.json(result.rows);
  } catch (error) {
    console.log(error);
    res.status(500).send("GET job service Database error");
  }
});

//POST add service to a job
router.post("/:id/services", async (req, res) => {
  try {
    const { job_id, service_id, price } = req.body;
    const result = await pool.query(
      "INSERT INTO job_services (job_id, service_id, price) VALUES ($1, $2, $3) RETURNING *",
      [job_id, service_id, price],
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send("POST job service Database error");
  }
});

// DELETE service from job
router.delete("/:jobId/services/:serviceId", async (req, res) => {
  try {
    const { jobId, serviceId } = req.params;

    await pool.query(
      `
      DELETE FROM job_services
      WHERE job_id = $1 AND service_id = $2
      `,
      [jobId, serviceId],
    );

    res.send("Service removed from job");
  } catch (error) {
    console.log(error);
    res.status(500).send("DELETE job service database error");
  }
});

// GET employees for one job
router.get("/:id/employees", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      `
      SELECT
        job_employees.id,
        employees.id AS employee_id,
        employees.name,
        employees.phone,
        employees.email
      FROM job_employees
      JOIN employees
        ON job_employees.employee_id = employees.id
      WHERE job_employees.job_id = $1
      `,
      [id],
    );

    res.json(result.rows);
  } catch (error) {
    console.log(error);
    res.status(500).send("GET job employees database error");
  }
});

// POST assign employee to job
router.post("/:id/employees", async (req, res) => {
  try {
    const { id } = req.params;
    const { employee_id } = req.body;

    const result = await pool.query(
      `
      INSERT INTO job_employees (job_id, employee_id)
      VALUES ($1, $2)
      RETURNING *
      `,
      [id, employee_id],
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send("POST job employee database error");
  }
});

// DELETE employee from job
router.delete("/:jobId/employees/:employeeId", async (req, res) => {
  try {
    const { jobId, employeeId } = req.params;

    await pool.query(
      `
      DELETE FROM job_employees
      WHERE job_id = $1 AND employee_id = $2
      `,
      [jobId, employeeId],
    );

    res.send("Employee removed from job");
  } catch (error) {
    console.log(error);
    res.status(500).send("DELETE job employee database error");
  }
});
export default router;
