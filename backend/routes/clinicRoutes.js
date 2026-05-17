const express = require("express");
const router = express.Router();

const Clinic = require("../models/Clinic");

router.post("/create", async (req, res) => {
  try {
    const clinic = await Clinic.create(req.body);
    res.status(201).json({ message: "Clinic created successfully", clinic });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const clinics = await Clinic.findAll();
    res.status(200).json(clinics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;