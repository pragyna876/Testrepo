const express = require ('express');
const bodyParser = require("body-parser");
const cors = require ("cors");
const mongoose= require('mongoose');

var app =express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const Schema = mongoose.Schema;

const EmployeeModelSchema = new Schema(
    {
        id  :Number,
        name : String,
        age :Number,
        email : String,
        mobile :String,
    },
    { versionKey: false  } );

    const EmployeeModel = mongoose.model('user',EmployeeModelSchema)

    //read 

    app.get("/api", async(req,res) =>{
        let result = await EmployeeModel.find({});
        try{
            console.log("[Read All] - No. of  items get from database : " + result.length);
            res.send(result);
        }
         catch(error){
            res.status(500).send(error);
        }
         }
        );

        //read single

        app.get("/api/:id",async(req,res)=>{
            var eno = req.params.id;
            let result = await EmployeeModel.findOne({id:eno},{"_id":0});
            console.log("[Read Single] - " + JSON.stringify(result));
            res.send(result);  
        });

        //create 

        app.post ('/api/create',async(req,res)=>{
            //console.log(req.body)
            const{id,name,age,email,mobile} =req.body;
            const data = new EmployeeModel(req.body);
            await data.save()
            //res.send({success : true ,message : "Record inserted in database"})
            var result = {};
		result.status  = "Record inserted in Database";
		console.log("[Create] - Record inserted in Database");
		res.send(result);    
        })

        //update data 

        app.put ('/api/update/:id',async(req,res)=>{
            console.log (req.body)
            const id = req.params.id;
            
            const {  name , age ,email ,mobile} = req.body;

            const updatedata = await EmployeeModel.findOneAndUpdate(
             { id: id },
            
            {$set : { name :name ,age :age , email: email,  mobile: mobile}},
            {new :true});
            res.send ({success : true ,message: "data updated sucessfully" ,data :updatedata})
            });

            var result = {};
		    result.status  = "Record updated in Database";
		    console.log("[Update] - Record updated in Database");
		//res.send(result);	

            //delte data

          app.delete('/api/delete/:id' ,async(req,res)=>{
           const id = req.params.id
           
            //console.log (id)//
            const data = await EmployeeModel.findOneAndDelete({id :id});
           // res.send ({success:true , message: "data deleted successfully"})

            var result = {};
            result.status  = "Record deleted from Database";
            console.log("[Delete] - Record deleted from Database");
            res.send(result);
          })  

app.get("/", function(req,res)
{
    res.send("Welcome to Express JS API Application");
});


mongoose.connect('mongodb://127.0.0.1:27017/crudDb');

var server=app.listen(8080,function() {});
console.log("Server Started. URL:http://localhost:8080")