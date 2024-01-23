var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/testDb');

var Schema = mongoose.Schema;

var ProductModelSchema = new Schema(
    {   
        pid: Number,
        pname: String,
        pcategory: String

    }, 
    { versionKey: false  } );

var ProductModel = mongoose.model('products', ProductModelSchema );

module.exports = ProductModel;