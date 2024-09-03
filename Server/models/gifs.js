const mongoose = require("mongoose");

const gifSchema = new mongoose.Schema({
  height: {
    type: String,
  },
  width: {
    type: String,
  },
  size: {
    type: String,
  },
  url: {
    type: String,
  },
  mp4_size: {
    type: String,
  },
  mp4: {
    type: String,
  },
  webp_size: {
    type: String,
  },
  webp: {
    type: String,
  },
  frames: {
    type: String,
  },
  hash: {
    type: String,
  },
  IsLiked:{
    type: Boolean,
    default: false
  }
});

const Gif = mongoose.model("Gif", gifSchema);

module.exports = Gif;
