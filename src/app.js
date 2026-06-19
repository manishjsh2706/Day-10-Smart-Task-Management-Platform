const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// ✅ ROUTES
app.use("/api/auth", authRoutes);


// Health check route
app.get("/", (req, res) => {
    res.send("Smart Task Manager API is running...");
});

module.exports = app;
