const mainController = {
    index: function (req,res) {
        req.session.ultimaVisita = new Date().toISOString();
        res.cookies("nombre", "juan");
        
    },

    intro: function(req, res,next) {
        res.render('intro')
    },
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
    search: function (req,res) {
        return res.send({nombre: req.session.nombre, ultimaVisita: req.session.ultimaVisita})
    },
   
}



module.exports = mainController;

