const express = require('express');
const app = express();
app.set("view engine", "hbs");
app.get("/", function (req, res){

    
    // Sample customer data
    const customerData = [
      {"Name":"Alfreds Futterkiste","City":"Berlin","Country":"Germany"},
      {"Name":"Ana Trujillo Emparedados y helados","City":"México D.F.","Country":"Mexico"},
      {"Name":"Antonio Moreno Taquería","City":"México D.F.","Country":"Mexico"},
      {"Name":"Around the Horn","City":"London","Country":"UK"},
      {"Name":"B's Beverages","City":"London","Country":"UK"},
      {"Name":"Berglunds snabbköp","City":"Luleå","Country":"Sweden"},
      {"Name":"Blauer See Delikatessen","City":"Mannheim","Country":"Germany"}
    ];
     
    const dataObj = {
        customerData : customerData
    };
    
    // Define a route to render the customer details
    
      res.render("home",dataObj );
    });
    

var server = app.listen(3005, function () { });
console.log("Express Server Application is started. Browser at the URL: http://localhost:3005/");
