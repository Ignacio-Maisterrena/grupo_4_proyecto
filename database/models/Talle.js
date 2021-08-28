const Sequelize = require("sequelize");
const sequelize = require("../database");

module.exports = (sequelize, dataTypes) => {
    const Talle = sequelize.define("talles", {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        talle: {
            type: dataTypes.STRING
        }
    }, 
    { tableName: "talles"},
    { timestamps: false} 
)
    return Talle   
}