var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var telaSchema = new Schema({        
    _id:  Schema.Types.ObjectId,
    nome: String,
    url: String,    
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