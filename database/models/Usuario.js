
module.exports = (sequelize, dataTypes) => {
    const Usuario = sequelize.define("Usuario", {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: dataTypes.STRING
        },
        avatar: {
            type: dataTypes.STRING
        },
        correo_electronico: {
            type: dataTypes.STRING
        },
        contraseña: {
            type: dataTypes.STRING
        },
        id_permisos: {
            type: dataTypes.INTEGER
        }
    },
        { tableName: "tabla_credenciales_usuarios",  timestamps: false }
    )


    Usuario.associate = function (models) {
        Usuario.belongsTo(models.Permisos, {
            as: "permisos",
            foreignKey: "id_permisos"
        });

        Usuario.belongsToMany(models.Producto, {
            as: "carrito",
            through: "tabla_auxiliar",
            foreignKey: "id_user",
            otherKey: "id_product",
            timestamps: false
        });

    }


    return Usuario
}