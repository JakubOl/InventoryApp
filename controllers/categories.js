const Category = require("../models/category");
const Item = require("../models/item");
module.exports.index = async (req, res) => {
  const categories = await Category.find({});
  res.render("nutrients/categories", { categories });
};

module.exports.showCategory = async (req, res) => {
  const category = await Category.findById(req.params.id);
  const items = await Item.find({ category: category.name });
  res.render("nutrients/items", { items });
};

module.exports.renderNewForm = async (req, res) => {
  res.render("nutrients/newCategory");
};

module.exports.createCategory = async (req, res, next) => {
  const category = new Category(req.body);
  await category.save();
  res.redirect("/categories");
};
