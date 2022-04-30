const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const items = require("../controllers/items");

router.route("/").get(items.index);

router.route("/new").get(items.renderNewForm).post(items.createItem);

router.route("/:id").get(items.showItem).delete(items.deteleItem);

module.exports = router;
