const catchAsyncError = require("../middleWares/catchAsyncError");
const UserImg = require("../models/userImage");
const UserLog = require("../models/userLog");
const ClarityUser = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");
const sendToken = require("../utils/sendToken");
const bcrypt = require("bcrypt");

// REGISTER API
const registerUser = catchAsyncError(async (req, res, next) => {
  const { name, email, password, img } = req.body;

  if (!name || !email || !password)
    return next(new ErrorHandler("Please Enter all Fields", 400));

  let user = await ClarityUser.findOne({ email });

  if (user) return next(new ErrorHandler("User Already exist"), 409);

  user = await ClarityUser.create({
    name,
    email,
    password,
  });
  const userImage = await UserImg.create({
    userId: user._id,
    image: img,
  });
  sendToken(res, user, "Registered Succesfully", 201);
});

// LOGIN API
const loginUser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    return next(new ErrorHandler("Please Enter all Fields", 400));

  let user = await ClarityUser.findOne({ email });

  if (!user)
    return next(new ErrorHandler("Username or Password is incorrect"), 401);

  // If the login is successful, find the user's image
  const userImg = await UserImg.findOne({ userId: user._id });
  const userLog = await UserLog.create({
    userid: user._id,
    userName: user.name,
    timeLog: new Date(),
  });

  if (user) {
    const passOk = bcrypt.compareSync(password, user.password);

    if (!passOk)
      return next(new ErrorHandler("Username or Password is incorrect", 401));

    if (passOk) {
      sendToken(res, user, userImg, `Welcome back ${user.name}`, 201);
    }
  }
});

// const lastLoginEvent = catchAsyncError(async (req, res, next) => {
//   const lastLogin = await UserLog.findOne().sort({ timeLog: -1 }).exec();
//   if (lastLogin) {
//     res.status(200).json(lastLogin);
//   } else {
//     return res.status(404).json({ message: "No login events found." });
//   }
// });

// module.exports = { registerUser, loginUser, lastLoginEvent };
