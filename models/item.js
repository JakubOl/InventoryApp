const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = Schema({
  name: { type: String, required: [true, "Name is required!"] },
  category: { type: String, required: true },
  price: { type: Number, required: [true, "Price is required!"] },
  description: { type: String },
  inStock: { type: Number, required: true },
});

itemSchema.virtual("url").get(function () {
  return "/item/" + this._id;
});

module.exports = mongoose.model("items", itemSchema);
