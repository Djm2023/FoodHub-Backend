const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema(
  {
    title: String,
    subtitle: String,
    tag: String,
    image: String,
    redirectUrl: String, // 👈 useful for click
    priority: {
      type: Number,
      default: 1,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Banner", bannerSchema);
