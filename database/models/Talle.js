module.exports = (sequelize, dataTypes) => {
    const Talle = sequelize.define("Talle", {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        talle: {
            type: dataTypes.STRING
        }
    },
        { tableName: "tabla_talles",  timestamps: false  }
        
    )

    Talle.associate = function (models) {
        Talle.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "id_talle"
        });
    }
        return Talle
    }