var Tela = require('../models/tela');
var mongoose = require('mongoose');
require('dotenv').config();

exports.find = async function(req, res, next) {
            
    mongoose.connect(process.env.BUONNY_EXT_ESTRANG_DB, function (err) {
    
        if (err) throw err;
    
        console.log('Successfully connected');                
    });  
    
    Tela.findOne({url: req.query.url})
    .then((tela)=>{
      if(tela != null){        
        res.status(200).send(tela);
      } else {
        res.status(404).send('Email e/ou senha inválidos!');
      }
    })
    .catch((err)=>{
        console.log('err', err);
        res.status(500).send({erro: err});               
    })             
    
            
};