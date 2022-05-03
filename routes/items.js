const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const items = require("../controllers/items");

router.route("/").get(catchAsync(items.index));

router
  .route("/new")
  .get(catchAsync(items.renderNewForm))
  .post(catchAsync(items.createItem));

router
  .route("/:id")
  .get(catchAsync(items.showItem))
  .put(catchAsync(items.updateItem))
  .delete(catchAsync(items.deteleItem));

router.get("/:id/edit", catchAsync(items.renderEditForm));

module.exports = router;
