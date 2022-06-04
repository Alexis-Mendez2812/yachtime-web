const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define(
      'Chat',
      {
         to: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         message: {
            type: DataTypes.STRING,
            allowNull: false,
         },
      },
      { timestamps: false }
   );
};
