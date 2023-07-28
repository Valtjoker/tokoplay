const express = require("express");
const Controller = require("../controllers/controller");
const router = express.Router();

router.get("/", Controller.getVideos);
router.get("/:id", Controller.getSingleVideo);

module.exports = router;
