const express = require("express");
const path = require("path");
// const mysql = require("mysql");
// const dotenv = require("dotenv");
const db = require("./db");

// dotenv.config({ path: "./.env" });

const app = express();

// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DATABASE,
//   port: process.env.DB_PORT,
// });

const publicDirectory = path.join(__dirname);
console.log(__dirname);
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// db.connect((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Connected to the PharmaGrow database!");
//   }
// // });
// app.get("/", (req, res) => {
//   res.send("Hello, PharmGrow!");
//   // res.render("")
// });

app.use("/", require("./routes/pages"));
app.use("/auth", require("./routes/auth"));
app.use("/med", require("./routes/med"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json);

app.listen(5001, () => {
  console.log("PharmGrow server is running on port 5001");
});
