var express = require('express');
var bodyParser = require('body-parser')

var app = express();

app.set("view engine", "hbs");

app.use(bodyParser.urlencoded({extended : false}));

app.set("view engine", "ejs");

app.get("/", function (req, res) {   
    res.render("home", {});
});

app.get('/product', (req, res) => {
    res.render("product", {GetTotal: ""});
});

app.post('/product', (req, res) => {
    const price = parseFloat(req.body.price);
    const quantity = parseInt(req.body.quantity);
    const totalAmount = price * quantity;
    res.render("product", {GetTotal: `${totalAmount}`});
});

var server = app.listen(3005,function(){
    console.log("Server Started at port 3005, http://localhost:3005")
});