var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mphasisstudents');

var Schema = mongoose.Schema;

var UserModelSchema = new Schema(
    {   
        uid: Number,
        pwd: String
    }, 
    { versionKey: false  } );

var UserModel = mongoose.model('users', UserModelSchema );

// Exporting UserModel 
module.exports = UserModel;