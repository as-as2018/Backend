const express = require("express");
const {
  registerUser,
  loginUser,
  lastLoginEvent,
} = require("../controllers/userControllers");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("'/getUserDetails/:userId'").get(lastLoginEvent);

module.exports = router;
