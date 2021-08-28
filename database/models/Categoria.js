const Sequelize = require("sequelize");
const sequelize = require("../database");

module.exports = (sequelize, dataTypes) => {
    const Categoria = sequelize.define("categorias", {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        categoria: {
            type: dataTypes.STRING
        }
    }, 
    { tableName: "categorias"},
    { timestamps: false} 
)
    return Categoria   
}