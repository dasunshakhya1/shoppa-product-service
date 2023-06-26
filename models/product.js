const {DataTypes} = require("sequelize");
const sequelize = require('../utils/db-util')


const product = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    imageURL: {
        type: DataTypes.STRING,
        allowNull: false
    }
}

const Product = sequelize.define("products", product);

module.exports = Product