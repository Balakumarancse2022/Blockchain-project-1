import express from "express";
import authorityRoutes from "./routes/authority.js";


const app = express();

// Middleware
app.use(express.json());
app.use("/api/authority", authorityRoutes);


// Test Route
app.get("/", (req, res) => {
  res.send("SecureLandX Backend Running 🚀");
});

export default app;
