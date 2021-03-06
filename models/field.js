var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var fieldSchema = new Schema({        
    _id:  Schema.Types.ObjectId,        
    dom_id: String,
    dom_name: String,
    dom_label: String,
    dom_class: String,
    dom_title: String,
    redmine_issue_id: String,
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
});

//Export model
module.exports = mongoose.model('fields', fieldSchema);