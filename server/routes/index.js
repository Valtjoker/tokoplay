const express = require("express");
const router = express.Router();
const usersRoute = require("./usersRoute");
const commentsRoute = require("./commentsRoute");
const videosRoute = require("./videosRoute");
const productsRoute = require("./productsRoute");
const errorHandler = require("../middlewares/errorHandler");

router.use("/video", videosRoute);
router.use("/comment", commentsRoute);
router.use("/product", productsRoute);
router.use("/user", usersRoute);

router.use(errorHandler);

module.exports = router;
