const express = require("express");
const router = express.Router();

const upload = require("../middleware/multer");
const clinicController = require("../controllers/adminClinicsController");

router.get("/", clinicController.getAllClinics);
router.post("/", upload.single("clinicImage"), clinicController.createClinic);
router.get("/:id", clinicController.getClinicById);
router.put("/:id", upload.single("clinicImage"), clinicController.updateClinic);
router.delete("/:id", clinicController.deleteClinic);



module.exports = router;
