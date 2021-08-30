//Requerir el modelo de usuario
const user = require('../models/userModel');

function userLoggedMiddleware(req, res, next) {

    res.locals.isLogged = false;

    let emailFromCookie = req.cookies.userEmail;
    let userFromCookie = user.findByField('email', emailFromCookie);
    

    if (userFromCookie) {
        req.session.userLogged = userFromCookie
    };

    if (req.session && req.session.userLogged) {
        res.locals.isLogged = true;

        //Poner los datos de Sesion en una variable global para las vistas
        res.locals.userLogged = req.session.userLogged
    };

    next();
};
module.exports = userLoggedMiddleware;