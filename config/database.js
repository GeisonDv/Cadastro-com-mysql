
//CONEXÃO COM O BANCO DE DADOS MYSQL
const Sequelize = require('sequelize');

sequelize = new Sequelize('Aula1', 'root','', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}