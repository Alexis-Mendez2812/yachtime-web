const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Users', {
      id: {
         type: DataTypes.UUID,
         defaultValue: DataTypes.UUIDV4,
         primaryKey: true,
      },
      email: {
         type: DataTypes.TEXT,
         allowNull: false,
         unique: true,
      },
      firtsName: {
         type: DataTypes.STRING,
         allowNull: true,
      },
      lastName: {
         type: DataTypes.TEXT,
         allowNull: true,
      },
      userName: {
         type: DataTypes.TEXT,
         allowNull: true,
      },
      picture: {
         type: DataTypes.TEXT,
         allowNull: true,
      },
      password: {
         type: DataTypes.STRING,
         allowNull: true,
      },
      role: {
         type: DataTypes.ENUM(
            'ROLE_USER',
            'ROLE_PRIME',
            'ROLE_ADMIN',
            'ROLE_SUPER_ADMIN',
            'ROLE_BANNED'
         ),
         defaultValue: 'ROLE_USER',
         allowNull: true,
      },
   });
};
