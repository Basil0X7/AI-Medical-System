"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ClinicWorkingHours", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      dayName: {
        type: Sequelize.ENUM(
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ),
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM("Open", "Closed"),
        defaultValue: "Open",
      },
      openTime: {
        type: Sequelize.TIME,
        allowNull: true,
      },
      closeTime: {
        type: Sequelize.TIME,
        allowNull: true,
      },
      clinicId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Clinics",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("ClinicWorkingHours");
  },
};
