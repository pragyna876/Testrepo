const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");  
const userRouter = require('./user-api');

var app=express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/users", userRouter);


app.get("/", function(req,res)
{
    res.send("Welcome to Express JS API Application");
});




var server=app.listen(3005,function() {});
console.log("Server Started. URL:http://localhost:3005");