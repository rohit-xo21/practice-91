const express = require("express");
const { createProduct, getProduct } = require("../controllers/productController");

const router = express.Router();

router.post("/create", createProduct);
router.get("/", getProduct);

module.exports = router;