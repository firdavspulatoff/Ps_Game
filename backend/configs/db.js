const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("postgres", "postgres", "Fird@vs2002", {
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  logging: false,
});

module.exports = sequelize;
