const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Contact = sequelize.define(
  "Contact",
  {
    contactId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "contacts",
    timestamps: true,
  }
);

module.exports = Contact;