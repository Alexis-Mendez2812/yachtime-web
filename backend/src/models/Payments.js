const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Payments", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    orderID: {
      type: DataTypes.STRING,
    },
    email: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    payerID: {
        type: DataTypes.STRING,
        allowNull: false
      },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  });
};