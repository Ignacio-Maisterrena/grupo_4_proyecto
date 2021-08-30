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

        //Chequear si ese nombre ya se usó
        let productInDB = product.findByField('nombre', req.body.nombre);
        if (productInDB) {
            return res.render('productCreate', {
                errors: {
                    nombre: {
                        msg: 'Este nombre ya fue registrado'
                    }
                },
                old: req.body
            });
        }

        //En el caso de que NO hayan errores
        const productToCreate = {
            ...req.body,
            picture: req.file.filename
        }

        console.log(req.body);

        //crear el producto en el JSON
        product.create(productToCreate);

        //Redirigir al home
        return res.redirect('/home');
    },


    //Detalles de un producto
    productDetail: function (req, res, next) {
        var id = req.params.id;

        //Buscar el producto entre los guardados
        let productFound = product.findByPk(id);

        if (!productFound) {
            res.send('No se encontró el producto');
        }

        res.render('productDetail', { productFound })
    },


    //Editar un producto

    productsIdEdit: function (req, res, next) {

        var id = req.params.id;

        //Buscar el producto entre los guardados
        let productFound = product.findByPk(id);

        res.render('productEdit', { productFound })
    },
    productsIdEdited: function (req, res, next) {

        var id = parseInt(req.params.id);

        //Buscar el producto entre los guardados
        let productFound = product.findByPk(id);

        let errors = validationResult(req);

        //En el caso de que hayan errores
        if (!errors.isEmpty()) {
            return res.render('productEdit', { errors: errors.mapped(), old: req.body, productFound })
        }


        //En el caso de que NO hayan errores
        const productToEdit = {
            id: id,
            ...req.body,
            picture: req.file.filename
        }

        product.edit(productToEdit);

        res.redirect('/products/'+id);
    },


    //Eliminar un producto
    productsIdDelete: function (req, res, next) {

        var id = req.params.id;

        product.delete(id);
    },




}
module.exports = productController