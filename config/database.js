const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('libary_manager','root',null,{
    dialect: 'mysql',
    host: 'localhost',
});

module.exports = sequelize;