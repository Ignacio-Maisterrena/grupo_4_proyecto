const Sequelize = require("sequelize");
const sequelize = require("../database");

module.exports = (sequelize, dataTypes) => {
    const CredencialDeUsuario = sequelize.define("credenciales de usuarios", {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: dataTypes.STRING
        },
        lastName: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        idPermisos: {
            type: dataTypes.INTEGER
        }
    }, 
    { tableName: "credenciales de usuarios"},
    { timestamps: false} 
)
    return CredencialDeUsuario
}