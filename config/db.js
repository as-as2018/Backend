// const mongoose = require("mongoose");
// const catchAsyncError = require("../middleWares/catchAsyncError");

// const connectDb = catchAsyncError(async () => {
//   const conn = await mongoose.connect(
//     "mongodb+srv://balajiaadi2000:Balaji100$good@cluster0.svqfopq.mongodb.net/?retryWrites=true&w=majority"
//   );
//   console.log(`mongoose is connected on : ${conn.connection.host}`);
// });

// module.exports = connectDb;


const mysql = require('mysql');

const connectDB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin@123",
  database: "biostar2_ac",
  port : 3312
});


module.exports = { connectDB }
