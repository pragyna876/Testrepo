const express = require("express");
const StudentModel = require('./models/student-model');
const router = express.Router();


router.get("/Std", async function (req, res) {

    let result = await StudentModel.find({}, { "_id": 0 });

    try {
        console.log("[Read All] - No. of  items get from database : " + result.length);
        res.send(result);
    }
    catch (error) {
        res.status(500).send(error);    
    }
});


router.get("/Std/:sid", async function(req, res)
{
    var sid =  req.params.sid;   	    
    let result  =  await StudentModel.findOne({ sid: sid}, {"_id":0});         
    console.log("[Read Single] - " + JSON.stringify(result));
    res.send(result);     
});


router.post('/Std',  async  function (req,res)
{ 
        var stdObj  = new  StudentModel({ 
            sid: parseInt(req.body.sid),
            name:  req.body.name,
            email : req.body.email,
            age: req.body.age,
            marks: req.body.marks,
         });

        let newObj  =  await  stdObj.save(); 
		
		var result = {};
		result.status  = "Record inserted in Database";
		console.log("[Create] - Record inserted in Database");
		res.send(result);           
});



router.put('/Std/:id',  async function (req,res)
{ 
    
        var stdObj  = {};
       stdObj. sid= parseInt(req.body.sid);
        stdObj.name =  req.body.name;
        stdObj.email =  req.body.email;
       stdObj. age= req.body.age;
       stdObj. marks=req.body.marks;

        let resResult  = await  StudentModel.findOneAndUpdate(  {sid:stdObj.sid},   {  $set : stdObj});
 
		var result = {};
		result.status  = "Record updated in Database";
		console.log("[Update] - Record updated in Database");
		res.send(result);	
});
router.delete('/Std/:id',async function (req,res)
{  
    var sid =  req.params.id;   
    let resResult  =  await  StudentModel.findOneAndDelete({ sid: sid}); 

	var result = {};
	result.status  = "Record deleted from Database";
	console.log("[Delete] - Record deleted from Database");
	res.send(result);
       
});



module.exports = router;