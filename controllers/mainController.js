const mainController = {
    home: function(req, res,next) {
        res.render('home')
    },
    intro: function(req, res, next) {
        res.render('intro')
    },
    productDetail: function(req, res, next) {
        res.render('ProductDetail')
    },
    carrito: function(req, res, next) {
        res.render('cart')
    },
    login: function(req, res, next) {
        res.render('log-in')
    },
    register: function(req, res, next) {
        res.render('register')
    },
    carga: function(req, res, next) {
        res.render('createProduct')
    },
    products: function(req, res, next) {
        res.render('products')
    },
    productsCreate: function(req, res, next) {
        res.render('productsCreate')
    },
    productsId: function(req, res, next) {
        res.render('productsId')
    },
    productsNew: function(req, res, next) {
        res.render('productsNew')
    },
    productsIdEdit: function(req, res, next) {
        res.render('productsIdEdit')
    },
    productsIdEdited: function(req, res, next) {
        res.render('productsIdEdited')
    },
    productsIdDelete: function(req, res, next) {
        res.render('productsIdDelete')
    },
   
}



module.exports = mainController;

