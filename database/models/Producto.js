module.exports = (sequelize, dataTypes) => {
    const Producto = sequelize.define("Producto", {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre_producto: {
            type: dataTypes.STRING
        },
        imagen: {
            type: dataTypes.STRING
        },
        precio: {
            type: dataTypes.INTEGER
        },
        id_talle: {
            type: dataTypes.INTEGER
        },
        id_color: {
            type: dataTypes.INTEGER
        },
        id_categoria: {
            type: dataTypes.INTEGER
        },
        descripcion: {
            type: dataTypes.TEXT 
        }
    }, 
    { tableName: "tabla_productos", timestamps: false}
)

    Producto.associate = function(models) {
        Producto.belongsTo(models.Talle, {
            as: "talle",
            foreignKey: "id_talle"
        });
        Producto.belongsTo(models.Color, {
            as: "color",
            foreignKey: "id_color"
        });
        Producto.belongsTo(models.Categoria, {
            as: "categoria",
            foreignKey: "id_categoria"
        });
    }

    return Producto
}