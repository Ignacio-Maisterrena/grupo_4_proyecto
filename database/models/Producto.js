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

    Producto.associate = function(models) {
        Producto.hasMany(models.talles, {
            as: "talles",
            foreignKey: "idSize"
        });
    }
    Producto.associate = function(models) {
        Producto.hasMany(models.colores, {
            as: "colores",
            foreignKey: "idColor"
        });
    }
    Producto.associate = function(models) {
        Producto.hasMany(models.categorias, {
            as: "categorias",
            foreignKey: "idCategory"
        });
    }

    return Producto
}