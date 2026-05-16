"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Clinic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // One Clinic has many WorkingHours
      Clinic.hasMany(models.ClinicWorkingHour, {
        foreignKey: "clinicId",
      });
    }
  }
  Clinic.init(
    {
      clinicName: DataTypes.STRING(100),
      clinicDescription: DataTypes.TEXT,
      clinicImage: DataTypes.STRING(255),
      clinicLocation: DataTypes.STRING(255),
      clinicStatus: DataTypes.ENUM("Active", "Maintenance", "Not Active"),
      clinicSpecialty: DataTypes.STRING(100),
    },
    {
      sequelize,
      modelName: "Clinic",
    },
  );
  return Clinic;
};
