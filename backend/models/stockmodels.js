const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema(
  {
    name: String,
    base_unit: String,
    buy: Number,
    sell: Number,
    last: Number,
    volume: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Stock", stockSchema);
