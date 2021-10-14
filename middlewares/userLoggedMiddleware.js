//importar la base de datos y sequelize
let db = require('../database/models')

async function userLoggedMiddleware(req, res, next) {

    res.locals.isLogged = false;

    let emailFromCookie = req.cookies.userEmail;

    let userFromCookie = {}
 
    if (emailFromCookie) {
        
        const userToLogin = await db.Usuario.findOne({
            where: { correo_electronico: emailFromCookie }
        })

        userFromCookie = userToLogin

        req.session.userLogged = userFromCookie
        
    };

    if (req.session && req.session.userLogged) {
        res.locals.isLogged = true;

        //Poner los datos de Sesion en una variable global para las vistas
        res.locals.userLogged = req.session.userLogged
    };
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    console.log(">>>>>>", req.session.userLogged)
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    next();
};
module.exports = userLoggedMiddleware;