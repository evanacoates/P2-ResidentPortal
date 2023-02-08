const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Residents extends Model {}

Residents.init(
  {
    unitNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
      //autoIncrement: true,
    },
    name: {
      type: DataTypes.VARCHAR,
      allowNull: false,
    },
    address: {
      type: DataTypes.VARCHAR,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.INTEGER,
    },
    email: {
      type: DataTypes.VARCHAR,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'residents',
  }
);

module.exports = Gallery;
