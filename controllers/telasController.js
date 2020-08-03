var Tela = require('../models/tela');
var mongoose = require('mongoose');
require('dotenv').config();

exports.find = async function(req, res, next) {
            
    console.log(process.env.BUONNY_EXT_ESTRANG_DB);
    mongoose.connect(process.env.BUONNY_EXT_ESTRANG_DB, function (err) {
    
        if (err) throw err;
    
        console.log('Successfully connected');                
    });  
    
    Tela.findOne({url: req.query.url})
    .then((tela)=>{
      if(tela != null){        
        res.status(200).send(tela);
      } else {
        res.status(404).send('Tela não encontrada.');
      }
    })
    .catch((err)=>{
        console.log('err', err);
        res.status(500).send({erro: err});               
    })                         
};

exports.add = async function(req, res, next) {    
    console.log('req.body', req.body);

    try{
        mongoose.connect(process.env.BUONNY_EXT_ESTRANG_DB, function (err) {    
            if (err) throw err;    
            console.log('Successfully connected');                
        });  

        Tela.findOne({_id: req.params.idTela})
        .then((tela)=>{
            if(tela != null){        
                let field = {                    
                    dom_id: req.body.dom_id,
                    dom_name: req.body.dom_name,
                    dom_label: req.body.dom_label,
                    dom_title: req.body.dom_title,
                    dom_class: req.body.dom_class,
                    dom_tag: req.body.dom_tag,
                    redmine_issue_id: req.body.redmine_issue_id,
                    status: req.body.status,
                    request: {
                        property: req.body.swagger_prop_req_name
                    },
                    response: {
                        property: req.body.swagger_prop_resp_name,
                        endpoint: req.body.input_link_resp_swagger
                    }            
                }                

                tela.fields.push(field);
                tela.save();

                res.status(200).send(tela);
            } else {
                res.status(404).send('Tela não encontrada!');
            }
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

exports.update = async function(req, res, next) {
    try{
        mongoose.connect(process.env.BUONNY_EXT_ESTRANG_DB, function (err) {    
            if (err) throw err;    
            console.log('Successfully connected');                
       });  

       console.log('req.params.idField', req.params.idField);
       Tela.update({'fields._id': req.params.idField}, {
           '$set': {                                
                'fields.$.dom_id': req.body.dom_id,
                'fields.$.dom_name': req.body.dom_name,
                'fields.$.dom_label': req.body.dom_label,
                'fields.$.dom_title': req.body.dom_title,
                'fields.$.dom_class': req.body.dom_class,
                'fields.$.dom_tag': req.body.dom_tag,
                'fields.$.redmine_issue_id': req.body.redmine_issue_id,
                'fields.$.status': req.body.status,
                'fields.$.request': {
                    property: req.body.swagger_prop_req_name
                },
                'fields.$.response': {
                    property: req.body.swagger_prop_resp_name,
                    endpoint: req.body.input_link_resp_swagger
                }
        }})
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