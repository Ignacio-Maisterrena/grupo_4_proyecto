//Requerir path y fs
var path = require('path');
var fs = require ('fs');

// Requerir los productos
const productsFilePath = path.join (__dirname, '../data/products.json');
const products= JSON.parse(fs.readFileSync (productsFilePath, 'utf-8'));

const mainController = {
    home: function(req, res,next) {
        res.render('home')
    },

    intro: function(req, res, next) {
        res.render('intro')
    },
    
    cart: function(req, res, next) {
        res.render('cart')
    }    
}

module.exports = mainController;

