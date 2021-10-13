module.exports = (sequelize, dataTypes) => {
    const Auxiliar = sequelize.define("Auxiliar", {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        id_product: {
            type: dataTypes.INTEGER,
        },

        id_user: {
            type: dataTypes.INTEGER,
        }
    },
        { tableName: "tabla_auxiliar", timestamps: false }

    );
    

    return Auxiliar
}