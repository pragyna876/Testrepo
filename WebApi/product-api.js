const express = require("express");
const ProductModel = require('./models/product-model');
const router = express.Router();

router.get("/prods", async function (req, res) {

    let result = await ProductModel.find({}, { "_id": 0 });

    try {
        console.log("[Read All] - No. of  items get from database : " + result.length);
        res.send(result);
    }
    catch (error) {
        res.status(500).send(error);    
    }
});


router.get("/prods/:id", async function(req, res)
{
    var pno =  req.params.id;   	    
    let result  =  await ProductModel.findOne({ pid: pno}, {"_id":0});
    console.log("[Read Single] - " + JSON.stringify(result));
    res.send(result);      
});

router.post('/prods',  async  function (req,res)
{ 
        var prodObj  = new  ProductModel({ 
            pid  :  req.body.pid,
            pname   : req.body.pname,
            pcategory: req.body.pcategory  });

        let newObj  =  await  prodObj.save(); 
		
		var result = {};
		result.status  = "Record inserted in Database";
		console.log("[Create] - Record inserted in Database");
		res.send(result);           
});

router.delete('/prods/:id',async function (req,res)
{  
    var prodid =  req.params.id;   
    let resResult  =  await  ProductModel.findOneAndDelete({ pid: prodid}); 

	var result = {};
	result.status  = "Record deleted from Database";
	console.log("[Delete] - Record deleted from Database");
	res.send(result);
       
});

module.exports = router;