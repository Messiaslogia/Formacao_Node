const Sequelize = require('sequelize');

const connection = new Sequelize('guiadeperguntas', 'root', '',{
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

module.exports = connection;