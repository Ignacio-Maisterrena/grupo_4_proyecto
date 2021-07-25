const { validationResult} = require("express-validator");

const controller = {
    register: (req, res) => {
        return res.render ("userRegisterForm")
    },
    processRegister: (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render("register", {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }

        return res.send ("ok, las validaciones se pasaron y no tienen errores");
     
    },
    login: (req, res) => {
        return res.render ("log-in");
    },
    
}