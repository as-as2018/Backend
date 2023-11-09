const { connectDB } = require("../config/db");

// const registerUser = (req, res) => {
//   const { username, password, img } = req.body;

//   connectDB.query(
//     "INSERT INTO registeruser (username, password, img) VALUES (?, ?, ?)",
//     [username, password, img],
//     (err, result) => {
//       if (err) throw err;

//       res.send("User registered!");
//     }
//   );
// };

// const userImg = (req, res) => {
//   const { userId, img } = req.body;

//   connectDB.query(
//     "INSERT INTO userImg (userId, img) VALUES (?, ?)",
//     [userId, img],
//     (err, result) => {
//       if (err) throw err;

//       res.send("Image uploaded!");
//     }
//   );
// };

// const loginUser = (req, res) => {
//   const { username, password } = req.body;

//   connectDB.query(
//     "SELECT * FROM registeruser WHERE username = ? AND password = ?",
//     [username, password],
//     (err, result) => {
//       if (err) throw err;

//       if (result.length > 0) {
//         const userId = result[0].id;

//         // Log user login
//         connectDB.query(
//           "INSERT INTO userLog (userId) VALUES (?)",
//           [userId],
//           (err, logResult) => {
//             if (err) throw err;

//             res.json("User log successful");
//           }
//         );
//       } else {
//         res.status(401).send("Invalid credentials");
//       }
//     }
//   );
// };




const lastLoginEvent = (req, res) => {

  connectDB.query(
    // here query written
   
    (err, result) => {
      if (err) throw err;

      if (result.length > 0) {
        const userDetails = result[0];
        console.log(userDetails);
        res.json(userDetails);
      } else {
        res.status(404).send("User not found");
      }
    }
  );
};

module.exports = { registerUser, userImg, loginUser, lastLoginEvent };
