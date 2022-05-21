const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("plan", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    premium: {
      type: DataTypes.TEXT,
    },
    standar: {
        type: DataTypes.TEXT,
      },
    mail: { 
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    }
  });
};