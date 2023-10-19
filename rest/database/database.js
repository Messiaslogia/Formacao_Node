const sequelize = require("sequelize");

const connection = new sequelize('rest', 'root', '',{
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

module.exports = connection;