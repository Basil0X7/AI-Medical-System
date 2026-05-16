"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Clinics", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      clinicName: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      clinicDescription: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      clinicImage: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      clinicLocation: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      clinicStatus: {
        type: Sequelize.ENUM("Active", "Maintenance", "Not Active"),
        defaultValue: "Active",
      },
      clinicSpecialty: {
        type: Sequelize.STRING(100),
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
    await queryInterface.dropTable("Clinics");
  },
};
