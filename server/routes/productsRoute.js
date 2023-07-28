const express = require("express");
const Controller = require("../controllers/controller");
const router = express.Router();

router.get("/", Controller.getProducts);
router.get("/:id", Controller.getSingleProduct);

module.exports = router;
