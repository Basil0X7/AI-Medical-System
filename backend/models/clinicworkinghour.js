"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ClinicWorkingHour extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // One ClinicWorkingHour belongs to one Clinic
      ClinicWorkingHour.belongsTo(models.Clinic, {
        foreignKey: "clinicId",
        onDelete: "CASCADE",
      });
    }
  }
  ClinicWorkingHour.init(
    {
      dayName: DataTypes.ENUM(
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ),
      status: DataTypes.ENUM("Open", "Closed"),
      openTime: DataTypes.TIME,
      closeTime: DataTypes.TIME,
      clinicId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ClinicWorkingHour",
    },
  );
  return ClinicWorkingHour;
};
