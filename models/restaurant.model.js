const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
});

const categorySchema = new mongoose.Schema({
  name: String,
  items: [menuItemSchema],
});

const restaurantSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    rating: Number,
    deliveryTime: String,
    cuisines: [String],
    costForTwo: String,
    categories: [categorySchema],
    isOpen: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Restaurant", restaurantSchema);
