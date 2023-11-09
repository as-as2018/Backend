const catchAsyncError = (passedFuction) => (req, res, next) => {
  //return a fuction

  Promise.resolve(passedFuction(req, res, next)).catch(next);
};

module.exports = catchAsyncError;
// After applying this we didnt want to add try and catch blocks
