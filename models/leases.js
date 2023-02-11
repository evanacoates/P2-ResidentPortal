const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Leases extends Model {}

Leases.init(
  {
    unitNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    leaseHolder: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    leasingTerm: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    rent_cost: {
        type: DataTypes.DECIMAL,
        allowNull: false,
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
