import express from "express";
import cors from "cors";

import customerRoutes from "./routes/customers.js";
import jobsRoutes from "./routes/jobs.js";

// calls application
const app = express();

app.use(cors());
app.use(express.json());

app.use("/customers", customerRoutes);
app.use("/jobs", jobsRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
