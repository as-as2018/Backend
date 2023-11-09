const { connectDB } = require('../config/db')
const catchAsyncError = require('../middleWares/catchAsyncError')
const queries = require('./user.query')
const ErrorHandler = require("../utils/errorHandler");
const error_code = require('../app/Constants')

module.exports.UserRegister = catchAsyncError(async (req, res, next) => {

    connectDB.query(queries.userRegistration, [fullname, mob, email, password, username], (err, result) => {
        if (err) {
            return next(new ErrorHandler("Please Enter all Fields", error_code.DB_ERROR));

        }
        else {
            console.log("User successfully Registered.");
            res.status(200).send("User successfully Registered.");
        }
    });


})
module.exports.UserRegister = catchAsyncError(async (req, res, next) => {

    connectDB.query(queries.userRegistration, [fullname, mob, email, password, username], (err, result) => {
        if (err) {
            return next(new ErrorHandler("Please Enter all Fields", error_code.DB_ERROR));

        }
        else {
            console.log("User successfully Registered.");
            res.status(200).send("User successfully Registered.");
        }
    });


})

