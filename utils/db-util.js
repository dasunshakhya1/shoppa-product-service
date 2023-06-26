const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("shoppa", "root", "root", {
    dialect: "mysql",
    host: "localhost"
});

module.exports = sequelize