const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Clinic = sequelize.define(
  "Clinic",
  {
    clinicId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    specialty: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      defaultValue: "blue",
    },
  },
  {
    tableName: "clinics",
    timestamps: true,
  }
);

module.exports = Clinic;