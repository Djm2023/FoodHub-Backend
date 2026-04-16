// src/controllers/restaurant.controller.js

const Restaurant = require("../models/restaurant.model");
const Banner = require("../models/banner.model");
const Category = require("../models/category.model");

// ✅ List with search + pagination
exports.getRestaurants = async (req, res) => {
  const data = await Restaurant.find().select(
    "name image rating deliveryTime cuisines costForTwo isOpen",
  );

  const banners = await Banner.find({ isActive: true }).sort({ priority: 1 });

  const categories = await Category.find({ isActive: true });

  return res.status(200).json({
    message: "Restaurant list fetched successfully",
    data: data,
    banners,
    categories,
  });
};

// ✅ Single restaurant (full menu)
exports.getRestaurantById = async (req, res) => {
  const { id } = req.params;

  const restaurant = await Restaurant.findById(id);

  if (!restaurant) {
    return res.status(404).json({ message: "Not found" });
  }

  return res.status(200).json({
    message: "Restaurant menu fetched successfully.",
    data: [restaurant],
  });
};
