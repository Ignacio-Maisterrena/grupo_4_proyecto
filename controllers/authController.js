var fs = require ('fs')

var path = require('path');
const usersFilePath = path.join (__dirname, '../users.json');
const users= JSON.parse(fs.readFileSync (usersFilePath, 'utf-8'));
const bcrypt = require ('bcryptjs');
const saltRounds = 10;

const authController = {
    registerCreate: (req, res, ) => {
        res.render ('register')
    },
    registerStore: (req, res)=>{
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
    }


}

module.exports = authController