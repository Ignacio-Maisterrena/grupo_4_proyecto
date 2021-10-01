
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
        { tableName: "tabla_credenciales_usuarios",  timestamps: false }
    )


    CredencialDeUsuario.associate = function (models) {
        CredencialDeUsuario.hasMany(models.permisos, {
            as: "permisosUsuarios",
            foreignKey: "idPermisos"
        });
    }


    return CredencialDeUsuario
}