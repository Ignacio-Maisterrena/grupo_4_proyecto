function authtMiddleware(req, res, next){
    if (req.session.userLogged!= undefined){
        next();
    }else{
        res.render('log-in');
    }
};
module.exports = authtMiddleware;