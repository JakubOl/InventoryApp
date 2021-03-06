const Item = require("../models/item");
const Category = require("../models/category");

module.exports.index = async (req, res) => {
  const items = await Item.find({});
  res.render("nutrients/items", { items });
};

module.exports.showItem = async (req, res) => {
  const item = await Item.findById(req.params.id);
  res.render("nutrients/showItem", { item });
};

module.exports.renderNewForm = async (req, res) => {
  const categories = await Category.find({});
  res.render("nutrients/newItem", { categories });
};

module.exports.createItem = async (req, res, next) => {
  const item = new Item(req.body);
  await item.save();
  res.redirect("/items");
};

module.exports.deteleItem = async (req, res, next) => {
  const { id } = req.params;
  await Item.findByIdAndDelete(id);
  res.redirect("/items");
};

module.exports.renderEditForm = async (req, res, next) => {
  const { id } = req.params;
  const item = await Item.findById(id);
  const categories = await Category.find({});
  res.render("nutrients/editItem", { item, categories });
};

module.exports.updateItem = async (req, res, next) => {
  const { id } = req.params;
  const item = await Item.findByIdAndUpdate(id, {
    ...req.body,
  });
  await item.save();
  res.redirect(`/items/${item.id}`);
};
