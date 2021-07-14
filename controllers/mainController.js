const controller = {
    home: function(req, res,next) {
        res.render('home')
    },
    productDetail: function(req, res, next) {
        res.render('ProductDetail')
    },
    carrito: function(req, res, next) {
        res.render('carrito-compras')
    },
    login: function(req, res, next) {
        res.render('log-in')
    },
    register: function(req, res, next) {
        res.render('register')
    },
    carga: function(req, res, next) {
        res.render('formularioDeCargaYEdicion')
    }
}