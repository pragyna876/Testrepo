var express = require('express');

var app = express();

app.use(express.static('public'))

app.get("/", function(req,res){
    
    res.sendFile(__dirname + "/views/home.html");

    // res.sendFile("home.html")  It will gives the error
});


app.get("/contact", function(req,res){
    
    res.sendFile(__dirname + "/views/login.html");
});



var server = app.listen(3005,function(){
    console.log("Server Started at port 3002, http://localhost:3005");
})