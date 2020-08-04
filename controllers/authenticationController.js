var User = require('../models/user');
var mongoose = require('mongoose');
require('dotenv').config();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

var jwt = require('jsonwebtoken');

// authentication.
exports.login = async function(req, res, next) {
        
    mongoose.connect(process.env.BUONNY_EXT_ESTRANG_DB, function (err) {    
        if (err) throw err;    
        console.log('Successfully connected');                
    });      
            
    console.log(req.body.email);

    User.findOne({email: req.body.email})
    .then((user)=>{
      if(user != null){
        // bcrypt.hash(req.body.password, saltRounds, (err, encrypted) => {
        //   req.body.password = encrypted
        //   next()
        // })
                
        bcrypt.compare(req.body.password, user.password, function (err, result) {
          if (result == true) {
            var id =  user._id;
            var token = jwt.sign({ id }, process.env.MEAO_SECRET, {
              expiresIn: 360000 // expires in 5min (300)
            });        
    
            res.status(200).send({ nome: user.nome, email: user.email, admin: user.admin, token: token });
          } else {
            res.status(404).send('Email e/ou senha inválidos!');            
          }
        });
      } else {
        res.status(404).send('Email e/ou senha inválidos 3!');
      }
    })
    .catch((err)=>{
        console.log('err', err);
        res.status(500).send({erro: err});
    })    
};

exports.logout = function(req, res) {

    res.status(200).send({ auth: false, token: null });
};