
import express from "express";
import dashboardRoutes from "./routes/dashboard.routes";

const app = express();
app.use(express.json());

app.use("/dashboard", dashboardRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

export default app;
