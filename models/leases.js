const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Leases extends Model {}

Leases.init(
  {
    unit_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    lease_holder: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    leasing_term: {
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
