module.exports = (sequelize, DataTypes) => {
  const Doctor = sequelize.define("Doctor", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    phone_number: {
      type: DataTypes.STRING,
    },

    ID_number: {
      type: DataTypes.STRING,
    },

    address: {
      type: DataTypes.STRING,
    },

    specialty: {
      type: DataTypes.STRING,
    },

    clinic_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Doctor;
};
