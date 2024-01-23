var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mphasisstudents');

var Schema = mongoose.Schema;

var StudentsModelSchema = new Schema(
    {   
        sid: Number,
        name: String,
        email: String,
        age: Number,
        marks: Number

    }, 
    { versionKey: false  } );

var StudentsModel = mongoose.model('students', StudentsModelSchema );

// Exporting StddentsModel 
module.exports = StudentsModel;