const mysql = require("mysql");
const express = require("express");
const db = require("../db");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// // const express = require("express");
// const dotenv = require("dotenv");

// dotenv.config({ path: "./.env" });

// const { PiSelectionSlashDuotone } = require("react-icons/pi");

// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DATABASE,
//   port: process.env.DB_PORT,
// });

exports.addMedicine = (req, res) => {
  console.log(req.body);

  const name = req.body.name;
  const medID = req.body.medID;
  const medGroup = req.body.medGroup;
  const qty = req.body.qty;
  const batchno = req.body.batchno;
  const dateofmanufucture = req.body.dateofmanufucture;
  const expirydate = req.body.expirydate;
  const price = req.body.price;
  const disposal = req.body.disposal;
  const description = req.body.description;

  db.query(
    "INSERT INTO med SET ?",
    {
      name: name,
      medID: medID,
      medGroup: medGroup,
      qty: qty,
      batchno: batchno,
      dateofmanufucture: dateofmanufucture,
      expirydate: expirydate,
      price: price,
      disposal: disposal,
      description: description,
    },
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        console.log(results);
        return res.render("addMedicine", {
          message: "Medicine added successfully",
        });
      }
    }
  );
};
exports.MedicinesList = (req, res) => {
  db.query("SELECT * FROM med", (error, results) => {
    if (error) {
      console.log(error);
    } else {
      console.log(results);
      return res.render("medicinesList", {
        medicines: results,
      });
    }
  });
};

exports.medicineGroup = (req, res) => {
  db.query(
    "SELECT medGroup and qty FROM med GROUP BY medGroup",
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        console.log(results);
        return res.render("medicineGroup", {
          medicineGroup: results,
        });
      }
    }
  );
};

exports.Shortage = (req, res) => {
  db.query("SELECT medGroup, qty FROM med WHERE qty < 20", (error, results) => {
    if (error) {
      console.log(error);
    } else {
      console.log(results);
      return res.render("medicinesShortage", {
        medicinesShortage: results,
      });
    }
  });
};

exports.deleteMedicine = (req, res) => {
  const medID = req.params.id;

  db.query("DELETE FROM med WHERE medID =?", medID, (error, results) => {
    if (error) {
      console.log(error);
    } else {
      console.log(results);
      return res.render("medicinesList", {
        message: "Medicine deleted successfully",
      });
    }
  });
};

exports.expired = (req, res) => {
  db.query(
    "SELECT *  FROM med WHERE expirydate < CURDATE()",
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        console.log(results);
        return res.render("medicinesExpiry", {
          medicinesExpiry: results,
        });
      }
    }
  );
};

exports.almostexpired = (req, res) => {
  db.query(
    "SELECT * FROM med WHERE expirydate BETWEEN CURDATE() AND DATE_ADD(CURDATE(), INTERVAL 7 DAY)",
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        console.log(results);
        return res.render("medicinesAlmostexpiry", {
          medicinesAlmostExpiry: results,
        });
      }
    }
  );
};
