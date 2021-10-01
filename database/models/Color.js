module.exports = (sequelize, dataTypes) => {
    const Color = sequelize.define("Color", {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        color: {
            type: dataTypes.STRING
        }
    },
        { tableName: "tabla_colores" , timestamps: false }
        
    )

    Color.associate = function (models) {
        Color.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "id_color"
        });
    }

    return Color
}