const models = require("../models");
const Clinic = models.Clinic;
const ClinicWorkingHour = models.ClinicWorkingHour;

const getAllClinics = async (req, res) => {
  try {
    const clinics = await Clinic.findAll();

    res.status(200).json(clinics);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error fetching clinics",
    });
  }
};

const createClinic = async (req, res) => {
  try {
    const {
      clinicName,
      clinicDescription,
      clinicLocation,
      clinicStatus,
      clinicSpecialty,
    } = req.body;

    const workingHours = JSON.parse(req.body.workingHours);
    console.log(req.body);

    const clinic = await Clinic.create({
      clinicName,
      clinicDescription,
      clinicImage: req.file ? req.file.filename : null,
      clinicLocation,
      clinicStatus,
      clinicSpecialty,
    });

    const workingHoursData = Object.keys(workingHours).map((day) => ({
      dayName: day,
      status: workingHours[day].status,

      openTime:
        workingHours[day].status === "Open"
          ? workingHours[day].open || null
          : null,

      closeTime:
        workingHours[day].status === "Open"
          ? workingHours[day].close || null
          : null,

      clinicId: clinic.id,
    }));

    await models.ClinicWorkingHour.bulkCreate(workingHoursData);

    res.status(201).json(clinic);
  } catch (error) {
    console.error("CREATE CLINIC ERROR:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};

const getClinicById = async (req, res) => {
  try {
    const clinic = await Clinic.findByPk(req.params.id, {
      include: [
        {
          model: models.ClinicWorkingHour,
        },
      ],
    });

    if (!clinic) {
      return res.status(404).json({
        message: "Clinic not found",
      });
    }

    res.json(clinic);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error fetching clinic",
    });
  }
};
const updateClinic = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      clinicName,
      clinicDescription,
      clinicLocation,
      clinicStatus,
      clinicSpecialty,
    } = req.body;

    const workingHours = JSON.parse(req.body.workingHours);
    // 1) تحديث بيانات العيادة
    const clinic = await Clinic.findByPk(id);

    if (!clinic) {
      return res.status(404).json({ message: "Clinic not found" });
    }

    await clinic.update({
      clinicName,
      clinicDescription,
      clinicLocation,
      clinicStatus,
      clinicSpecialty,
      clinicImage: req.file ? req.file.filename : clinic.clinicImage,
    });

    // 2) تحديث working hours (أسهل طريقة: حذف وإعادة إنشاء)
    if (workingHours) {
      await ClinicWorkingHour.destroy({
        where: { clinicId: id },
      });

      const hoursData = Object.keys(workingHours).map((day) => ({
        clinicId: id,
        dayName: day,
        status: workingHours[day].status,
        openTime: workingHours[day].open || null,
        closeTime: workingHours[day].close || null,
      }));

      await ClinicWorkingHour.bulkCreate(hoursData);
    }

    res.status(200).json({
      message: "Clinic updated successfully",
      clinic,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error updating clinic",
    });
  }
};

const deleteClinic = async (req, res) => {
  try {
    const { id } = req.params;

    const clinic = await Clinic.findByPk(id);

    if (!clinic) {
      return res.status(404).json({ message: "Clinic not found" });
    }

    // 1) حذف working hours أولاً (احتياطاً)
    await ClinicWorkingHour.destroy({
      where: { clinicId: id },
    });

    // 2) حذف العيادة
    await clinic.destroy();

    res.status(200).json({
      message: "Clinic deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error deleting clinic",
    });
  }
};

module.exports = {
  getAllClinics,
  createClinic,
  getClinicById,
  updateClinic,
  deleteClinic,
};
