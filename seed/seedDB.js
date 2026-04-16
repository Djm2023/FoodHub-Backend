// src/seed/seedDB.js

require("dotenv").config({ path: "../.env" });
const mongoose = require("mongoose");
const Restaurant = require("../models/restaurant.model");
const Banner = require("../models/banner.model");
const bannerData = require("../utils/bannerData");
const Category = require("../models/category.model");
const categoryData = require("../utils/categoryData");
const generateData = require("../utils/generateData");

mongoose.connect(process.env.MONGO_URI).then(async () => {
  const data = generateData();

  await Restaurant.deleteMany();
  await Restaurant.insertMany(data);

  await Banner.deleteMany();
  await Banner.insertMany(bannerData);

  await Category.deleteMany();
  await Category.insertMany(categoryData);

  console.log("🌱 Seeded 30 restaurants");
  process.exit();
});
