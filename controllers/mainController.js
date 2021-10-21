//Requerir path y fs
var path = require('path');
var fs = require('fs');

// Requerir los productos
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

//importar la base de datos y sequelize
let db = require('../database/models')

const mainController = {
    home: function (req, res, next) {
      //  res.render('home')

        db.Producto.findAll( { include: ["talle", "color", "categoria"] })
            .then((resultado) => {
                res.render('home', { products: resultado })
            })
    },

    intro: function (req, res, next) {
        res.render('intro')
    }
}

module.exports = mainController;

