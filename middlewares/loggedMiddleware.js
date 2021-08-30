function loggedMiddleware(req, res, next){
    if (req.session.userLogged!= undefined){
        next();
    }else{
        res.render('logIn');
    }
};
module.exports = loggedMiddleware;