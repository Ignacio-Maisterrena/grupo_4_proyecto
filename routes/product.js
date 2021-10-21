//Requerir path y fs
var path = require('path');
var fs = require('fs');

var express = require('express');
var router = express.Router();

//Requerir productsController
const productController = require ('../controllers/productsController');

//Requerir middleware de productsValidator
const productsValidator = require('../middlewares/productsValidatorMiddleware.js');

//Requerir middleware de multer
const multer = require('../middlewares/multerProductMiddleware');

/*ROUTES*/

router.get('/', productController.products)

//Crear un producto
router.get('/create', productController.productCreate)
router.post ('/create', multer.single('picture'), productController.productStore);
//router.post ('/create', productsValidator, multer.single('picture'), productController.productStore);

//Detalles de un producto
router.get ("/:id", productController.productDetail);

//Editar un producto
router.get ("/:id/edit", productController.productsIdEdit);
router.post ("/:id/edit", multer.single('picture'), productController.productsIdEdited);
//router.post ("/:id/edit", productsValidator, multer.single('picture'), productController.productsIdEdited);

//Eliminar un producto
router.get ("/:id/delete", productController.productsIdDelete);

module.exports= router;