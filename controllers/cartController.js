//Requerir path y fs
var path = require('path');
var fs = require('fs');

// Requerir los productos
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

//importar la base de datos y sequelize
let db = require('../database/models')

const cartController = {

    cart: async (req, res, next) => {

        console.log(" en el carrito probando" + req.session.userLogged);

        const usuarioCarrito = await db.Usuario.findByPk(req.session.userLogged.id, {
            include: ["permisos", "carrito" ]
        })
        
        const productosCarrito = usuarioCarrito.carrito

        res.render('cart', { productos: productosCarrito })
    },
    cartAdd: (req, res, next) => {

        db.Auxiliar.create({
            id_user: req.session.userLogged.id,
            id_product: req.params.id
        })

        res.redirect('/cart')
    }
}

module.exports = cartController;

