const Sequelize = require("sequelize");

const sequelize = new Sequelize("movieRevs", "postgres", "admin", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
});

module.exports = sequelize;
