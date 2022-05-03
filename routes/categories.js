const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const categories = require("../controllers/categories");

router.route("/").get(catchAsync(categories.index));

router
  .route("/new")
  .get(catchAsync(categories.renderNewForm))
  .post(catchAsync(categories.createCategory));

router
  .route("/:id")
  .get(catchAsync(categories.showCategory))
  .delete(catchAsync(categories.deleteCategory));

module.exports = router;
