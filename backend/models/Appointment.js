const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Appointment = sequelize.define(
  "Appointment",
  {
    appointmentId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    doctorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    clinicId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    patientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    appointmentDateTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    status: {
      type: DataTypes.ENUM(
        "Pending",
        "Confirmed",
        "Cancelled"
      ),
      defaultValue: "Pending",
      allowNull: false,
    },
  },

  {
    tableName: "appointments",

    timestamps: true,

    freezeTableName: true,
  }
);

module.exports = Appointment;