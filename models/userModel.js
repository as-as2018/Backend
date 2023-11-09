const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const ClarityUserSchma = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

ClarityUserSchma.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const hashedPassword = await bcrypt.hash(this.password, 10);
  this.password = hashedPassword;
  next();
});

ClarityUserSchma.methods.getJWTToken = function () {
  return jwt.sign({ _id: this._id }, "secret_key", {
    expiresIn: "1d",
  });
};
const ClarityUser = model("ClarityAuthUser", ClarityUserSchma);

module.exports = ClarityUser;
