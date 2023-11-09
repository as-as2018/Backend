const express = require("express");
const {
  registerUser,
  loginUser,
  lastLoginEvent,
} = require("../controllers/user.controller");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/lastlogin").get(lastLoginEvent);

module.exports = router;
