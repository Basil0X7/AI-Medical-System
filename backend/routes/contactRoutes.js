const express = require("express");
const router = express.Router();

const Contact = require("../models/Contact");

router.post("/create", async (req, res) => {
  try {
    const contact = await Contact.create(req.body);

    res.status(201).json({
      message: "Message sent successfully",
      contact,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;