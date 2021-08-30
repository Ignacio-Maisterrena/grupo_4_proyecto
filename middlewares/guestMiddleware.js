function guestMiddleware(req, res, next){
    if (req.session.userLogged== undefined){
        next();
    }else{
        res.send('Esta página es solo para visitas');
    }
}
module.exports = guestMiddleware;