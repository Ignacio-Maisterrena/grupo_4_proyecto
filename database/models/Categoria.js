module.exports = (sequelize, dataTypes) => {
    const Categoria = sequelize.define("Categoria", {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        categoria: {
            type: dataTypes.STRING
        }
    },
        { tableName: "tabla_categorias", timestamps: false }
        
    )

    Categoria.associate = function (models) {
        Categoria.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "id_categoria"
        });
    }

    return Categoria
}