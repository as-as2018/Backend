// models/UserImg.js
const mongoose = require("mongoose");

const userImgSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  image: { type: String },
});

const UserImg = mongoose.model("UserImg", userImgSchema);

module.exports = UserImg;
