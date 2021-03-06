var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var telaSchema = new Schema({        
    _id:  Schema.Types.ObjectId,
    nome: String,
    url: String,    
    sistema: String,
    fields: [{        
        dom_id: String,
        dom_name: String,
        dom_label: String,
        dom_class: String,
        dom_title: String,
        dom_tag: String,
        redmine_issue_id: String,
        status: String,
        request: {
            property: String
        },
        response: {
            endpoint: String,
            property: String
        },  
        createdAt: { 
            type: Date,
            default: Date.now
        },
        updatedAt: { 
            type: Date,
            default: Date.now
        }
    }],
    createdAt: { 
        type: Date,
        default: Date.now
    },
    updatedAt: { 
        type: Date,
        default: Date.now
    }
});

//Export model
module.exports = mongoose.model('telas', telaSchema);