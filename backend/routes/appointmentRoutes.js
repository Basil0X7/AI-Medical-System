const express = require("express");
const router = express.Router();

const Appointment = require("../models/Appointment");


// CREATE Appointment
router.post("/create", async (req, res) => {
  try {
    const appointment = await Appointment.create(req.body);

    res.status(201).json({
      message: "Appointment created successfully",
      appointment,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


// GET all appointments
router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.findAll();

    res.status(200).json(appointments);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


// UPDATE appointment
router.put("/:id", async (req, res) => {
  try {

    await Appointment.update(req.body, {
      where: {
        appointmentId: req.params.id,
      },
    });

    const updatedAppointment =
      await Appointment.findByPk(req.params.id);

    res.status(200).json({
      message: "Appointment updated successfully",
      updatedAppointment,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


// DELETE appointment
router.delete("/:id", async (req, res) => {
  try {

    const deleted = await Appointment.destroy({
      where: {
        appointmentId: req.params.id,
      },
    });

    if (!deleted) {
      return res.status(404).json({
        message: "Appointment not found",
      });
    }

    res.status(200).json({
      message: "Appointment deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;