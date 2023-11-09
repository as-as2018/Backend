const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const { connectDB } = require("./config/db"); //Database connection
const ErrorMiddleWare = require("./middleWares/Error"); //Error handling middleware
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
const cookieParser = require("cookie-parser");

connectDB.connect(function (err) {
  if (err) throw err;
  console.log("DB Connected!");
});

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use("/api/users", userRoutes);
app.use(ErrorMiddleWare);

app.listen(5050);
