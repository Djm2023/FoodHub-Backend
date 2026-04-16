// src/routes/restaurant.routes.js

const express = require("express");
const router = express.Router();
const controller = require("../controllers/restaurant.controller");

router.get("/", controller.getRestaurants);
router.get("/:id", controller.getRestaurantById);

module.exports = router;
