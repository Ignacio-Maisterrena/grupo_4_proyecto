const Sequelize = require("sequelize");
const sequelize = require("../database");

module.exports = (sequelize, dataTypes) => {
    const PermisoParaUsuario = sequelize.define("permisos", {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        rango: {
            type: dataTypes.STRING
        },
        permisoEditar: {
            type: dataTypes.INTEGER
        },
        permisoComprar: {
            type: dataTypes.INTEGER
        }
    }, 
    { tableName: "permisos"},
    { timestamps: false} 
)
    return PermisoParaUsuario
}