const Category = require("../models/category");
const Item = require("../models/item");

module.exports.index = async (req, res) => {
  const categories = await Category.find({});
  res.render("nutrients/categories", { categories });
};

module.exports.showCategory = async (req, res) => {
  const category = await Category.findById(req.params.id);
  const items = await Item.find({ category: category.name });
  res.render("nutrients/showCategory", { items, category });
};

module.exports.renderNewForm = async (req, res) => {
  res.render("nutrients/newCategory");
};

module.exports.createCategory = async (req, res, next) => {
  const category = new Category(req.body);
  await category.save();
  res.redirect("/categories");
};

module.exports.deleteCategory = async (req, res, next) => {
  const { id } = req.params;
  const category = await Category.findByIdAndDelete(id);
  await Item.deleteMany({ category: category.name });
  res.redirect("/items");
};
