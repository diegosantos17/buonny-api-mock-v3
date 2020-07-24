require('dotenv').config();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({        
    _id:  { type: Schema.ObjectId, auto: true },
    id:  String,
    name: String,    
    key: String,
    fabric: String,
    origin: String,    
    createdAt: { 
        type: Date,
        default: Date.now
    },
    updatedAt:{ 
        type: Date,
        default: Date.now
    }
});

//Export model
module.exports = mongoose.model('Project', projectSchema);