const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({});
const videoSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  url: {
    required: true,
    type: String,
  },
  thumbnailUrl: {
    required: true,
    type: String,
  },
});
const productSchema = new mongoose.Schema({
  productUrl: {
    required: true,
    type: String,
  },
  title: {
    required: true,
    type: String,
  },
  price: {
    required: true,
    type: Number,
  },
  videoId: {
    required: true,
    type: mongoose.Schema.ObjectId,
  },
});
const commentSchema = new mongoose.Schema({
  comment: {
    required: true,
    type: String,
  },
  timestamp: {
    required: true,
    type: String,
  },
  userId: {
    required: true,
    type: String,
  },
  videoId: {
    required: true,
    type: mongoose.Schema.ObjectId,
  },
  userId: {
    required: true,
    type: mongoose.Schema.ObjectId,
  },
});

User = mongoose.model("User", userSchema);
Video = mongoose.model("Video", videoSchema);
Product = mongoose.model("Product", productSchema);
Comment = mongoose.model("Comment", commentSchema);
module.exports = { User, Video, Product, Comment };
