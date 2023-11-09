const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const UserLogSchema = new mongoose.Schema({
  userid: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  userName: { type: String },
  timeLog: { type: Date },
});

const UserLog = mongoose.model("UserLOg", UserLogSchema);
module.exports = UserLog;
