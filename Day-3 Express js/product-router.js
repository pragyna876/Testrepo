const express = require("express");
const router = express.Router();

router.get("/AllDepts", function (req, res) {

    let dataObj = {};    
    dataObj.productArray = [
        { pid: 1234, pname:"Samsung LG Tv", price: 50000, quantity: 1, categories:"Electronics"},
        {pid: 1235, pname:"Shoe", price: 1000, quantity: 2, categories:"Clothing"},
        { pid: 1236, pname:"LG Freeze", price: 50000, quantity: 1, categories:"Electronics" },
        { pid: 1237, pname:"Jeans", price: 500, quantity: 3, categories:"Clothing" },
    ];

    res.render("productdetail", dataObj);
});

router.get("/GetDeptById/:id", function (req, res) { 
    var productArray = [
    { pid: 1234, pname:"Samsung LG Tv", price: 50000, quantity: 1, categories:"Electronics"},
    {pid: 1235, pname:"Shoe", price: 1000, quantity: 2, categories:"Clothing"},
    { pid: 1236, pname:"LG Freeze", price: 50000, quantity: 1, categories:"Electronics" },
    { pid: 1237, pname:"Jeans", price: 500, quantity: 3, categories:"Clothing" },
];

     let prdid = req.params.id;
     
    let dataObj = {};    
    dataObj.prdObj = productArray.find( item => item.pid == prdid );
   
    res.render("prddetails", dataObj);
});


   router.get("/GetPrdByElc", function (req, res) {
        
        var productArray = [
        { pid: 1234, pname:"Samsung LG Tv", price: 50000, quantity: 1, categories:"Electronics"},
        {pid: 1235, pname:"Shoe", price: 1000, quantity: 2, categories:"Clothing"},
        { pid: 1236, pname:"LG Freeze", price: 50000, quantity: 1, categories:"Electronics" },
        { pid: 1237, pname:"Jeans", price: 500, quantity: 3, categories:"Clothing" },
    ];
    
         
        let ename = req.query.Electronics;
        let dataObj = {}; 
        if(ename){
           
        dataObj.eObj = productArray.filter( item => item.categories == ename );
        }
        else{
            dataObj.eObj=productArray.filter( item => item.categories == "Electronics");;
        }
    
        res.render("electronics", dataObj);
    });
 

    router.get("/GetPrdByClth", function (req, res) {
        
        var productArray = [
        { pid: 1234, pname:"Samsung LG Tv", price: 50000, quantity: 1, categories:"Electronics"},
        {pid: 1235, pname:"Jeans", price: 1000, quantity: 2, categories:"Clothing"},
        { pid: 1236, pname:"LG Freeze", price: 50000, quantity: 1, categories:"Electronics" },
        { pid: 1237, pname:"Tshirt", price: 500, quantity: 3, categories:"Clothing" },
    ];
    
         
        let clname = req.query.Clothing;
        let dataObj = {}; 
        if(clname){
           
        dataObj.clObj = productArray.filter( item => item.categories == clname );
        }
        else{
            dataObj.clObj=productArray.filter( item => item.categories == "Clothing");;
        }
    
        res.render("clothing", dataObj);
    });

module.exports = router;