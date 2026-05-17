const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.post("/create", async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/email/:email", async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.params.email,
      },
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    await User.update(req.body, {
      where: {
        userId: req.params.id,
      },
    });

    const updatedUser = await User.findByPk(req.params.id);

    res.status(200).json({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;