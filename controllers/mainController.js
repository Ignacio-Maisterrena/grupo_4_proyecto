//Requerir path y fs
var path = require('path');
var fs = require('fs');

// Requerir los productos
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainController = {
    home: function (req, res, next) {
        res.render('home')
    },

    intro: function (req, res, next) {
        res.render('intro')
    },

    cart: function (req, res, next) {

        
        const productosCarrito = [
            {
                "id": 1,
                "nombre_producto": "Buzo Vintage",
                "imagen": "1630330743244_img_.jpg",
                "precio": 3200,
                "id_talle": 1,
                "id_color": 1,
                "id_categoria": 1,
                "descripcion": "lorem ipsum",
                "talle": {
                    "id": 1,
                    "talle": "XS"
                },
                "color": {
                    "id": 1,
                    "color": "Naranja"
                },
                "categoria": {
                    "id": 1,
                    "categoria": "Buzo"
                }
            },
            {
                "id": 2,
                "nombre_producto": "Chaleco Jean",
                "imagen": "1630330818453_img_.jpg",
                "precio": 4500,
                "id_talle": 1,
                "id_color": 4,
                "id_categoria": 2,
                "descripcion": "lorem ipsum",
                "talle": {
                    "id": 1,
                    "talle": "XS"
                },
                "color": {
                    "id": 4,
                    "color": "Rojo"
                },
                "categoria": {
                    "id": 2,
                    "categoria": "Chaleco"
                }
            },
            {
                "id": 3,
                "nombre_producto": "Jean Mujer",
                "imagen": "1630330857757_img_.jpg",
                "precio": 5200,
                "id_talle": 1,
                "id_color": 2,
                "id_categoria": 3,
                "descripcion": "lorem ipsum",
                "talle": {
                    "id": 1,
                    "talle": "XS"
                },
                "color": {
                    "id": 2,
                    "color": "Negro"
                },
                "categoria": {
                    "id": 3,
                    "categoria": "Jean"
                }
            },
            {
                "id": 4,
                "nombre_producto": "Mono",
                "imagen": "1630330902632_img_.jpg",
                "precio": 3600,
                "id_talle": 1,
                "id_color": 4,
                "id_categoria": 4,
                "descripcion": "lorem ipsum",
                "talle": {
                    "id": 1,
                    "talle": "XS"
                },
                "color": {
                    "id": 4,
                    "color": "Rojo"
                },
                "categoria": {
                    "id": 4,
                    "categoria": "Mono"
                }
            },
            {
                "id": 5,
                "nombre_producto": "Remera London",
                "imagen": "1630361040646_img_.jpg",
                "precio": 1200,
                "id_talle": 2,
                "id_color": 3,
                "id_categoria": 5,
                "descripcion": "lorem ipsum",
                "talle": {
                    "id": 2,
                    "talle": "S"
                },
                "color": {
                    "id": 3,
                    "color": "Azul"
                },
                "categoria": {
                    "id": 5,
                    "categoria": "Remera"
                }
            },
            {
                "id": 6,
                "nombre_producto": "Short deportivo",
                "imagen": "1630330995243_img_.jpg",
                "precio": 2500,
                "id_talle": 2,
                "id_color": 4,
                "id_categoria": 6,
                "descripcion": "lorem ipsum",
                "talle": {
                    "id": 2,
                    "talle": "S"
                },
                "color": {
                    "id": 4,
                    "color": "Rojo"
                },
                "categoria": {
                    "id": 6,
                    "categoria": "Short deportivo"
                }
            }
        ]
        res.render('cart', { productos: productosCarrito })
    }
}

module.exports = mainController;

