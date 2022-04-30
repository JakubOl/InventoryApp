const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const categories = require("../controllers/categories");

router.route("/").get(categories.index);

router
  .route("/new")
  .get(categories.renderNewForm)
  .post(categories.createCategory);

router.route("/:id").get(categories.showCategory);

module.exports = router;
