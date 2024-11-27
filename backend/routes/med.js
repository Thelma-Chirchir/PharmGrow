const express = require("express");
const medController = require("../controllers/medController");

const router = express.Router();

router.post("/addMedicine", medController.addMedicine);
router.get("/medicinesList", medController.MedicinesList);
router.get("/medicineGroup", medController.medicineGroup);
router.get("/Shortage"), medController.Shortage;

module.exports = router;
