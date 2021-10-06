//Requerir path y fs
var path = require('path');
var fs = require ('fs');

//importar la base de datos y sequelize
let db = require('../database/models')

const mainController = {
    users: function(req, res,next) {
        db.Usuario.findAll()
        .then((resultados)=>{
            res.json(resultados)
        })
    },

    user: function(req, res, next) {
        db.Usuario.findAll({
            include: [{association: "permisos"}]
        })
        .then((resultados)=>{
            res.json(resultados)
        })
    },

    products: function(req, res, next) {
        db.Producto.findAll()
        .then((resultados)=>{
            res.json(resultados)
        })
        
    },
    product: function(req, res, next) {
        db.Producto.findByPk(req.params.id)
        .then((resultados)=>{
            res.json(resultados)
        })
    }
}

module.exports = mainController;
