function guestMiddleware(req, res, next){
    if (req.session.userLogged== undefined){
        next();
    }else{
        res.render('perfil');
    }
}
module.exports = guestMiddleware;