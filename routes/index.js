var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res,next) {
  res.render('home');
});
router.get('/ProductDetail', function(req, res, next) {
  res.render('ProductDetail');
});
router.get('/Carrito', function(req, res, next) {
  res.render('carrito-compras');
});

router.get('/log-in', function(req, res, next) {
  res.render('log-in');
});

router.get('/register', function(req, res, next) {
  res.render('register');
});

router.get('/carga', function(req, res, next) {
  res.render('formularioDeCargaYEdicion');
});

module.exports = router;
