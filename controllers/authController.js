
var fs = require ('fs')

var path = require('path');
const usersFilePath = path.join (__dirname, '../users.json');
const users= JSON.parse(fs.readFileSync (usersFilePath, 'utf-8'));
const bcrypt = require ('bcryptjs');
const saltRounds = 10;
const {validationResult}= require ('express-validator');



const authController = {
    registerCreate: (req, res, ) => {
      return  res.render ('register', {errors:[]})
    },
    registerStore: (req, res)=>{
       const errors = validationResult(req);
       if(!errors.isEmpty()){
           return res.render('register', {errors: errors.array()}) 
           
       }
        const usersToCreate = req.body;
        usersToCreate.id = 1;
        console.log (saltRounds, req.body)
        usersToCreate.password = bcrypt.hashSync (req.body.password, saltRounds)
       users.forEach(user => {
           usersToCreate.id = user.id + 1
       });
        users.push(usersToCreate)
        fs.writeFileSync (usersFilePath, JSON.stringify(users, null, 2))
        return res.send(usersToCreate)
    },

    loginCreate: (req, res) => {
        return res.render ("log-in");
    },

    loginStore: (req, res) => {
        const userToLogin = users.find((user)=> user.email == req.body.email);
       
        if (!userToLogin){
            return res.send ('Error')
        }
console.log (req.body)
        const comparacion = bcrypt.compareSync(req.body.password, userToLogin.password);

       if (comparacion){ req.session.user = userToLogin
        return res.send (req.session)}
        return res.send (req.body);
    }




}

module.exports = authController