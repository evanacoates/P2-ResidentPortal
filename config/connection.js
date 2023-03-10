const Sequelize = require('sequelize');
require('dotenv').config();

// Add a log to see if ENVs are being added properly
console.log("process.env.DB_NAME: ", process.env.DB_NAME)
console.log("process.env.DB_USER: ", process.env.DB_USER)
console.log("process.env.DB_PASSWORD: ", process.env.DB_PASSWORD)
console.log("process.env.JAWSDB_URL: ", process.env.JAWSDB_URL)

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    },
  );
}

module.exports = sequelize;