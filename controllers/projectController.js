var Project = require('../models/project');
var mongoose = require('mongoose');
const fetch = require('node-fetch');
global.Headers = fetch.Headers;

var _ = require('lodash');
var _ = require('lodash/core');
var orderBy = require('lodash.orderby');

require('dotenv').config();


// Display list of all Projects.
exports.project_list = function(req, res, next) {
    
    mongoose.connect(process.env.MEAO_DB, function (err) {    
        if (err) throw err;    
        console.log('Successfully connected');    
    });  

    Project.find({})
    .exec(function (err, list_project) {
        if (err) { return next(err); }                
        res.send(list_project);
        //Successful, so render
        //res.render('project_list', { title: 'Projetos', book_list: list_project });        
    });
};

exports.sync_jira = function (req, res, next){
        
    console.log(process.env);
    
    let headers = new Headers();
    let username = process.env.MEAO_JIRA_BUONNY.split(':')[0];
    let password = process.env.MEAO_JIRA_BUONNY.split(':')[1];

    

    headers.append('Accept', 'application/json');
    headers.append('Authorization', "Basic " + new Buffer(username + ":" + password).toString("base64"));

    mongoose.connect(process.env.MEAO_DB, function (err) {    
        if (err) throw err;    
        console.log('Successfully connected');    
    });  

    fetch(process.env.MEAO_JIRA_BUONNY_HOST + '/rest/api/3/project', {
        method: 'GET',
        headers: headers
    })
    .then(response => {
        console.log(
            `Response: ${response.status} ${response.statusText}`
        );
        return response.text();
    })
    .then(text  => {                    
        let projects = orderBy(JSON.parse(text), ['name'], ['asc']);
         _.forEach(projects, function(prj) {
            console.log(prj.id, '-', prj.name.split(']').length > 1 ? prj.name.split(']')[1] : prj.name);
            Project.findOneAndUpdate(
                {id: prj.id},
                {$set:
                    {                        
                        name: prj.name.split(']').length > 1 ? prj.name.split(']')[1].trimStart() : prj.name,
                        fabric: prj.name.split(']').length > 1 ? prj.name.split(']')[0].replace('[', '').toUpperCase() : 'BUONNY',
                        key:prj.key
                    }
                },{new:true})   
            .then((docs)=>{                
                if(docs) {                   
                   console.log('alterado', prj.name);                  
                } else {                   
                   var pro = new Project({
                        id: prj.id,
                        key: prj.key,
                        name: prj.name.split(']').length > 1 ? prj.name.split(']')[1].trimStart() : prj.name,
                        fabric: prj.name.split(']').length > 1 ? prj.name.split(']')[0].replace('[', '').toUpperCase() : 'BUONNY',
                        origin: 'JIRA'
                    });
                    pro.save(function (err, fluffy) {
                        if (err) return console.error(err);
                        console.log('novo');                  
                    });                    
                }
            }).catch((err)=>{
                console.log('err', err)               
            })                                
                        
        });
        res.send(true);
    })
    .catch(err => {
        console.error(err)
        res.send({status: false, error: err});  
    });    
}