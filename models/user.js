var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({        
    _id:  Schema.Types.ObjectId,
    name: String,
    email: String,
    password: String,
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
module.exports = mongoose.model('users', userSchema);