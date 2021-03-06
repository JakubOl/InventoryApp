const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = Schema({
  name: { type: String, required: [true, "Name is required!"] },
  description: { type: String },
});

categorySchema.virtual("url").get(function () {
  return "/category/" + this._id;
});

module.exports = mongoose.model("categories", categorySchema);
