// Backend/app.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const restaurantRoutes = require("./routes/restaurant.routes");
const logger = require("./middlewares/logger.middleware");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Custom Logger
app.use(logger);

// Routes
app.use("/api/restaurants", restaurantRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("API is running...");
});

module.exports = app;
