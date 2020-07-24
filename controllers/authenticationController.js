var User = require('../models/user');
var mongoose = require('mongoose');
require('dotenv').config();

var jwt = require('jsonwebtoken');

// authentication.
exports.login = async function(req, res, next) {
        
    mongoose.connect(process.env.MEAO_DB, function (err) {
    
        if (err) throw err;
    
        console.log('Successfully connected');                
    });  

    User.findOne({email: req.body.email, password: req.body.password})
    .then((user)=>{

      if(user != null){
        var id =  user._id;
        var token = jwt.sign({ id }, process.env.MEAO_SECRET, {
          expiresIn: 3600 // expires in 5min (300)
        });        

        res.status(200).send({ nome: user.name, email: user.email, auth: true, token: token });
      } else {
        res.status(404).send('Email e/ou senha inválidos!');
      }
    })
    .catch((err)=>{
        console.log('err', err);
        res.status(500).send({erro: err});               
    })             
        
      //     console.log('userkjkjsddkj', user._id);

      //     if(user != null){                      
      //       // var token = jwt.sign(user._id, process.env.MEAO_SECRET, {
      //       //   expiresIn: 3600 // expires in 5min
      //       // });        
    
      //       //res.status(200).send({ nome: user.name, email: user.email, token: token });

      //       var token = jwt.sign(1, process.env.MEAO_SECRET, {
      //         expiresIn: 300 // expires in 5min
      //       });        
      //       res.status(200).send(true);
      //     } else {      
      //       res.status(404).send('Email e/ou senha inválidos!');
      //     }          
      // });          
    
    
    console.log('req.body', req.body);

    // if(req.body.email === 'di.santos@reply.com' && req.body.password === 'reply@123'){

    //     console.log('req.body', req.body)
    //     //auth ok
    //     const id = 1; //esse id viria do banco de dados
    //     var token = jwt.sign({ id }, process.env.MEAO_SECRET, {
    //       expiresIn: 300 // expires in 5min
    //     });        

    //     res.status(200).send({ nome: 'Diego Santos Rodrigues', auth: true, token: token });
    //   } else {      
    //     res.status(500).send('Login inválido!');
    //   }

    
};

exports.logout = function(req, res) {

    res.status(200).send({ auth: false, token: null });
};