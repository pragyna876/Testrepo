var express = require('express');

var app = express();

app.get("/", function(req,res){
    let productId = "10256";
    let productName = "LG Printer";
    let productUnitPrice = "2500";
    let productQuantity = "3";
    let productTotalAmount = "7500";

    let Table = `
        <table border="1">
            <tr>
                <th>Product Id</th>
                <td>${productId}</td>
            </tr>
            <tr>
                <th>Product Name</th>
                <td>${productName}</td>
            </tr>
            <tr>
                <th>Unit Price</th>
                <td>${productUnitPrice}</td>
            </tr>
            <tr>
                <th>Quantity</th>
                <td>${productQuantity}</td>
            </tr>
            <tr>
                <th>Total Amount</th>
                <td>${productTotalAmount}</td>
            </tr>
        </table>
    `
    res.send(Table);
})

var server = app.listen(3005,function(){
    console.log("Server Started at port 3005, http://localhost:3005");
})