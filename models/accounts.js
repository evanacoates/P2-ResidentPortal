const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Accounts extends Model {
  checkPassword(password) {
    console.log(this.password)
    console.log(this.user_name)
    return bcrypt.compareSync(password, this.password);
    
  }
}

Accounts.init(
  {
  
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    unit_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
  },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    billing_in: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
  },

  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Accounts',
  }
);

module.exports = Accounts;
