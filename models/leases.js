const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Leases extends Model {}

Leases.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'accounts',
        key: 'id',
      },
    },
    unit_number: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    lease_holder: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    leasing_term: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rent_cost: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'leases',
  }
);

module.exports = Leases;
