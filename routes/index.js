var express = require('express');
var router = express.Router();
var mainController = require ('../controllers/mainController');
const upload = multer ({storage});


/* GET home page. */
router.get('/search', mainController.search);

router.get('/INTRO', mainController.intro);

router.get('/', mainController.home);

router.get('/ProductDetail', mainController.productDetail);

router.get('/Carrito', mainController.carrito);

router.get('/log-in', mainController.login);

router.get('/register', mainController.register);

router.get('/carga', mainController.carga);

router.get ("/products", mainController.products);

router.get ("/products/create", mainController.productsCreate);

router.get ("/products/:id", mainController.productsId);

router.post ("/products", mainController.productsNew);

router.get ("/products/:id/edit", mainController.productsIdEdit);

router.put ("/products/:id", mainController.productsIdEdited);

router.delete ("/products/:id", mainController.productsIdDelete);


module.exports = router;
