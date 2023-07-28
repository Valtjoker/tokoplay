const { User, Video, Product, Comment } = require("../models/index");
const mongoose = require("mongoose");
class Controller {
  static async login(req, res, next) {
    try {
    } catch (error) {}
  }

  static async getVideos(req, res, next) {
    try {
      const videos = await Video.find();
      res.status(200).json({ videos });
    } catch (error) {
      next(error);
    }
  }
  static async getSingleVideo(req, res, next) {
    try {
      const video = await Video.findById(req.params.id);
      if (!video) {
        throw { name: "video_not_found" };
      }
      res.status(200).json({ video });
    } catch (error) {
      next(error);
    }
  }
  static async getProducts(req, res, next) {
    try {
      const products = await Product.find();
      res.status(200).json({ products });
    } catch (error) {
      next(error);
    }
  }
  static async getSingleProduct(req, res, next) {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        throw { name: "product_not_found" };
      }
      res.status(200).json({ product });
    } catch (error) {
      next(error);
    }
  }
  static async getComments(req, res, next) {
    try {
      const comments = await Comment.find();
      res.status(200).json({ comments });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
