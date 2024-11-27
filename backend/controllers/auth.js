const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
// const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

// const { PiSelectionSlashDuotone } = require("react-icons/pi");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DB_PORT,
});

exports.createAccount = (req, res) => {
  console.log(req.body);

  const fullname = req.body.fullname;
  const username = req.body.username;
  const password = req.body.password;
  const passwordConfirm = req.body.passwordConfirm;

  db.query(
    "SELECT username FROM users WHERE username = ?",
    [username],
    async (error, result) => {
      if (error) {
        console.log(error);
      }
      if (result.length > 0) {
        return res.render("createAccount", {
          message: "Username already exists. Please choose a different one.",
        });
      } else if (password !== passwordConfirm) {
        return res.render("createAccount", {
          message: "Passwords do not match. Please try again.",
        });
      } else if (!fullname || !username || !password) {
        return res
          .status(400)
          .send("Invalid request. Please provide all fields.");
      }
      let hashedPassword = await bcrypt.hash(password, 8);
      console.log(hashedPassword);

      db.query(
        "INSERT INTO users SET ?",
        { fullname: fullname, username: username, password: hashedPassword },
        (error, results) => {
          if (error) {
            console.log(error);
          } else {
            console.log(results);
            return res.render("createAccount", {
              message: "Account created successfully",
            });
          }
        }
      );
    }
  );

  // res.send("Form submitted");
};

exports.Login = (req, res) => {
  console.log(req.body);

  const username = req.body.username;
  const password = req.body.password;
  db.query(
    "SELECT * FROM users WHERE username =?",
    [username],
    async (error, result) => {
      if (error) {
        console.log(error);
      }
      if (result.length === 0) {
        return res.render("login", {
          message: "Invalid username or password",
        });
      }

      const validPassword = await bcrypt.compare(password, result[0].password);

      if (!validPassword) {
        return res.render("login", {
          message: "Invalid username or password",
        });
      }

      const token = jwt.sign(
        { id: result[0].id, username: result[0].username },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      res.cookie("token", token, { expiresIn: "1h" });
      res.redirect("/dashboard");
    }
  );
};

// require("dotenv").config(); // Load environment variables from .env

// const mysql = require("mysql");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// const express = require("express");

// // Database connection
// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DATABASE,
//   port: process.env.DB_PORT,
// });

// exports.createAccount = (req, res) => {
//   console.log(req.body);

//   const { fullname, username, password, passwordConfirm } = req.body;

//   // Check if the passwords match
//   if (password !== passwordConfirm) {
//     return res.render("createAccount", {
//       message: "Passwords do not match. Please try again.",
//     });
//   }

//   db.query(
//     "SELECT username FROM users WHERE username = ?",
//     [username],
//     async (error, result) => {
//       if (error) {
//         console.error(error);
//         return res
//           .status(500)
//           .send("An error occurred while checking username availability.");
//       }
//       if (result.length > 0) {
//         return res.render("createAccount", {
//           message: "Username already exists. Please choose a different one.",
//         });
//       }

//       // Hash the password
//       let hashedPassword;
//       try {
//         hashedPassword = await bcrypt.hash(password, 8);
//         console.log("Hashed Password:", hashedPassword);
//       } catch (hashError) {
//         console.error(hashError);
//         return res
//           .status(500)
//           .send("An error occurred while hashing the password.");
//       }

//       // Insert user into the database
//       db.query(
//         "INSERT INTO users SET ?",
//         { fullname: fullname, username: username, password: hashedPassword },
//         (insertError, results) => {
//           if (insertError) {
//             console.error(insertError);
//             return res
//               .status(500)
//               .send("An error occurred while creating the account.");
//           } else {
//             console.log("Insert Results:", results);
//             return res.render("createAccount", {
//               message: "Account created successfully!",
//             });
//           }
//         }
//       );
//     }
//   );
// };
