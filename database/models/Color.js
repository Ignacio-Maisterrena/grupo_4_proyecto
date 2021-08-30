const Sequelize = require("sequelize");
const sequelize = require("../database");

module.exports = (sequelize, dataTypes) => {
    const Color = sequelize.define("colores", {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        color: {
            type: dataTypes.STRING
        }
    }, 
    { tableName: "colores"},
    { timestamps: false} 
)
    return Color   
}