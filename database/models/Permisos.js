module.exports = (sequelize, dataTypes) => {
    const Permisos = sequelize.define("Permisos", {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        rango: {
            type: dataTypes.STRING
        },
        permiso_editar: {
            type: dataTypes.INTEGER
        },
        permiso_comprar: {
            type: dataTypes.INTEGER
        }
    },
        { tableName: "tabla_permisos_usuarios", timestamps: false }
    )
    Permisos.associate = function (models) {
        Permisos.hasMany(models.Usuario, {
            as: "usuario",
            foreignKey: "id_permisos"
        });  
    }
    return Permisos
}