const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "ai_medical_system",
  "root",
  "123456789",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

module.exports = sequelize;