//Requerir path y fs
var express = require('express');
var router = express.Router();

//Requierir los controlladores
var cartController = require('../controllers/cartController');

//Requerir los middlewares
const loggedMiddleware = require('../middlewares/loggedMiddleware')
const guestMiddleware = require('../middlewares/guestMiddleware')


router.get('/', loggedMiddleware, cartController.cart);

router.get('/add/:id', cartController.cartAdd);




module.exports = router;