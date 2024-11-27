const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("login");
});

router.post("/createAccount", (req, res) => {
  res.render("createAccount");
});

router.post("/addMedicine", (req, res) => {
  res.render("addMedicine");
});

module.exports = router;
