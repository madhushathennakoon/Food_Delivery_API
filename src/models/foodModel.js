const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
  {
    imageUrl: {
      type: String,
      // required: true,
    },
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(" food", foodSchema);
