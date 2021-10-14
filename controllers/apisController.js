//Requerir path y fs
var path = require('path');
var fs = require('fs');

//importar la base de datos y sequelize
let db = require('../database/models')

const mainController = {
    users: function (req, res, next) {
        db.Usuario.findAll({
            include: ["permisos", "carrito" ]
        })
            .then((resultados) => {
                res.json(resultados)
            })
    },

    user: function (req, res, next) {
        db.Usuario.findByPk(req.params.id, {
            include: ["permisos", "carrito" ]
        })
            .then((resultado) => {
                res.json(resultado)
            })
    },

    products: function (req, res, next) {
        db.Producto.findAll(
            { include: ["talle", "color", "categoria", "carrito"] }
        )
            .then((resultados) => {
                res.json(resultados)
            })

    },
    product: function (req, res, next) {
        db.Producto.findByPk(req.params.id,
            { include: ["talle", "color", "categoria", "carrito"] })

            .then((resultado) => {
                res.json(resultado)
            })

            .catch((e) => {
                res.send(e);
            })
    }
}

module.exports = mainController;
