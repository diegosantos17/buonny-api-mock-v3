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


exports.add = async function(req, res, next) {    
    try{
        mongoose.connect(process.env.BUONNY_EXT_ESTRANG_DB, function (err) {    
            if (err) throw err;    
            console.log('Successfully connected');                
        });  
        
        let field = {
            dom_id: req.body.dom_id,
            dom_name: req.body.dom_name,
            dom_label: req.body.dom_label,
            dom_title: req.body.dom_title,
            dom_class: req.body.dom_class,
            redmine_issue_id: req.body.input_link_redmine,
            status: req.body.status,
            request: {
                property: req.body.swagger_prop_req_name
            },
            response: {
                property: req.body.swagger_prop_resp_name,
                endpoint: req.body.input-link_resp_swagger
            }            
        }
        Tela.update(
            { _id: req.body.idTela }, 
            { $push: { fields: field } },
            function (error, success) {
                if (error) {
                    console.log(error);
                    res.status(500).send(error);        
                } else {                    
                    console.log(success);
                    res.status(200).send(field);
                }
            }
        );                
    }    
    catch (err){
        res.status(500).send({erro: err});
    }
};

exports.update = async function(req, res, next) {    
    try{
        mongoose.connect(process.env.BUONNY_EXT_ESTRANG_DB, function (err) {    
            if (err) throw err;    
            console.log('Successfully connected');                
        });  
                
        Tela.findOneAndUpdate({url: req.query.url, fields: {$elemMatch: {_id: req.body.idField}}},
        {
            $set: {
                'fields.$.dom_id': req.body.dom_id,
                'fields.$.dom_name': req.body.dom_name,
                'fields.$.dom_label': req.body.dom_label,
                'fields.$.dom_title': req.body.dom_title,
                'fields.$.dom_class': req.body.dom_class,
                'fields.$.redmine_issue_id': req.body.input_link_redmine,
                'fields.$.status': req.body.status,
                'fields.$.request.property': req.body.swagger_prop_req_name,
                'fields.$.response.property': req.body.swagger_prop_resp_name,
                'fields.$.response.endpoint': req.body.input-link_resp_swagger            
            }
        }, // list fields you like to change
        {'new': true, 'safe': true, 'upsert': true})
        .then((field)=>{
            res.status(200).send(field);        
        })
        .catch((err)=>{
            console.log('err', err);
            res.status(500).send({erro: err});               
        })        
    }    
    catch (err){
        res.status(500).send({erro: err});
    }
};