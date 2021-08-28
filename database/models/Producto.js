const Sequelize = require("sequelize");
const sequelize = require("../database");

module.exports = (sequelize, dataTypes) => {
    const Producto = sequelize.define("productos", {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nameProduct: {
            type: dataTypes.STRING
        },
        image: {
            type: dataTypes.STRING
        },
        price: {
            type: dataTypes.INTEGER
        },
        idSize: {
            type: dataTypes.INTEGER
        },
        idColor: {
            type: dataTypes.INTEGER
        },
        idCategory: {
            type: dataTypes.INTEGER
        },
        description: {
            type: dataTypes.TEXT 
        }
    }, 
    { tableName: "productos"},
    { timestamps: false} 
)
    return Producto
}