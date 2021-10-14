//importar la base de datos y sequelize
let db = require('../database/models')

function userLoggedMiddleware(req, res, next) {

    res.locals.isLogged = false;

    let emailFromCookie = req.cookies.userEmail;

    let userFromCookie = {}
 
    if (emailFromCookie) {
        async function buscarEnDb() {
            const userToLogin = await db.Usuario.findOne({
                where: { correo_electronico: emailFromCookie }
            })

            userFromCookie = userToLogin

            req.session.userLogged = userFromCookie
        }
        buscarEnDb()
    };

    if (req.session && req.session.userLogged) {
        res.locals.isLogged = true;

        //Poner los datos de Sesion en una variable global para las vistas
        res.locals.userLogged = req.session.userLogged
    };

    next();
};
module.exports = userLoggedMiddleware;