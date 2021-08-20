var express = require('express');
var router = express.Router();
var mainController = require ('../controllers/mainController');

const authtMiddleware = require('../middlewares/authMiddleware')
const guestMiddleware = require('../middlewares/guestMiddleware')

/* GET home page. */

router.get('/intro', mainController.intro);

router.get('/', mainController.home);

router.get('/ProductDetail', mainController.productDetail);

router.get('/cart', authtMiddleware, mainController.carrito);

router.get('/log-in', guestMiddleware, mainController.login);

router.get('/register', guestMiddleware, mainController.register);

router.get('/createProduct', authtMiddleware, mainController.carga);

router.get ("/products", mainController.products);

router.get ("/products/create", authtMiddleware, mainController.productsCreate);

router.get ("/products/:id", mainController.productsId);

router.post ("/products", authtMiddleware, mainController.productsNew);

router.get ("/products/:id/edit", authtMiddleware, mainController.productsIdEdit);

router.put ("/products/:id", authtMiddleware, mainController.productsIdEdited);

router.delete ("/products/:id", authtMiddleware, mainController.productsIdDelete);


module.exports = router;
