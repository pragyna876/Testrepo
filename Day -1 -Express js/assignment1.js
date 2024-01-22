var express = require('express');

var app = express();

app.get("/", function(req,res){
    var str = "Employee Id :  10256 <br>";
    str += "Employee Name  :  Narasimha Rao <br>";
    str += "Employee Job : Manager <br>";
    str += "Employee Deptno :  10 <br>";
    str += "Employee EmailId :  tnrao.trainer@gmail.com <br>";

    res.send(str);
})

var server = app.listen(3005,function(){
    console.log("Server Started at port 3002, http://localhost:3005");
})