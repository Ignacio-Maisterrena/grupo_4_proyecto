//Requerir path y fs
var fs = require('fs')
var path = require('path');

//Requerir lista de productos
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

//Requerir express validator
const { validationResult } = require('express-validator');

//Requerir el modelo de productos
const product = require('../models/productsModel');

//importar la base de datos y sequelize
let db = require('../database/models')


//CONTROLLER
const productController = {

    //Crear un producto
    productCreate: (req, res,) => {
        res.render('productCreate')

    },

    productStore: (req, res) => {
        let errors = validationResult(req);

        //En el caso de que hayan errores
        if (!errors.isEmpty()) {
            return res.render('productCreate', { errors: errors.mapped(), old: req.body })
        }

        //        //Chequear si ese nombre ya se usó
        //        let productInDB = product.findByField('nombre', req.body.nombre);
        //        if (productInDB) {
        //            return res.render('productCreate', {
        //                errors: {
        //                    nombre: {
        //                        msg: 'Este nombre ya fue registrado'
        //                    }
        //                },
        //                old: req.body
        //            });
        //        }

        //En el caso de que NO hayan errores

        //Crear el producto en la base de datos
        db.Producto.create({
            nombre_producto: req.body.nombre,
            imagen: req.file.filename,
            precio: req.body.precio,
            id_talle: 1,
            id_color: 1,
            descripcion: req.body.descripcion,
            id_categoria: 1,

        })
            .then(() => {
                //Redirigir al home
                return res.redirect('/home');
            })
            .catch((e) => {
                res.send(e);
            })
    },


    //Detalles de un producto
    productDetail: function (req, res, next) {
        var id = req.params.id;

        //Buscar el producto entre los guardados
        db.Producto.findByPk(id, { include: ["talle", "color", "categoria"] })
            .then((resultado) => {
                res.render('product_detail', { productFound: resultado })
            })
            .catch((e) => {
                res.send(e);
            })
    },


    //Editar un producto

    productsIdEdit: function (req, res, next) {

        var id = req.params.id;

        //Buscar el producto entre los guardados y mandarlo a la vista
        db.Producto.findByPk(id, { include: ["talle", "color", "categoria"] }).then((resultado) => {
            res.render('productEdit', { productFound: resultado })
        })
    },
    productsIdEdited: function (req, res, next) {

        var id = parseInt(req.params.id);

        let errors = validationResult(req);

        //En el caso de que hayan errores
        if (!errors.isEmpty()) {
            return res.render('productEdit', { errors: errors.mapped(), old: req.body, productFound })
        }


        //En el caso de que NO hayan errores

        //Guardar los datos recibidos
        const productToEdit = {
            ...req.body,
            imagen: req.file.filename
        }

        //Actualizar la base de datos
        db.Producto.update(productToEdit,
            {
                where: { id: id }
            }

        )
            .then(() => {
                res.redirect('/products/' + id);
            })

            .catch((e) => {
                res.send(e)
            })
    },


    //Eliminar un producto
    productsIdDelete: function (req, res, next) {

        var id = req.params.id;

        db.Producto.destroy({
            where: { id: id }
        })
            .then(() => {
                res.send('Producto número ' + id + ' eliminado con éxito');
            })

            .catch((e) => {
                res.send(e)
            })
    },




}
module.exports = productController