import express from "express";
import cors from "cors";

import customerRoutes from "./routes/customers.js";
import jobsRoutes from "./routes/jobs.js";
import loginRoutes from "./routes/auth.js";
import employeesRoutes from "./routes/employees.js";
import servicesRoutes from "./routes/services.js";
import invoicesRoutes from "./routes/invoices.js";

// calls application
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/customers", customerRoutes);
app.use("/api/jobs", jobsRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/employees", employeesRoutes);
app.use("/api/services", servicesRoutes);
app.use("/api/invoices", invoicesRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
