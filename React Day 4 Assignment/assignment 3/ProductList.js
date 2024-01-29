import React from "react";
import axios from "axios";
import {useState} from "react";
function ProductList(){
    const [pid , setpid] =useState("");
    const [pname , setpname] =useState("");
    const [pcategory , setpcategory] =useState("");
    const [ProductArray, setProductArray] = useState([]);

    function getDataButtonClick(){
        let url ="http://localhost:3005/pradapi/prods";
        axios.get(url) .then((resData)=>{
            setProductArray(resData.data);
        });
    }
  
  function addDataButtonClick(){
    let prodObj ={
    pid :pid,
    pname :pname,
    pcategory :pcategory,
    };

    let url ="http://localhost:3005/pradapi/prods";
    axios.post(url ,prodObj).then((resData) =>{
        alert("New record added succesfully");
        getDataButtonClick();
    });
    clearFields()
  }

  function clearFields(){
    setpid("");
    setpname("");
    setpcategory("");
  }

  function prdDeleteButtonClick(pid) {
    let flag = window.confirm("Do you want to confirm");
    if (!flag) {
      return;
    }

  let url = "http://localhost:3005/pradapi/prods/" +pid ;
  axios.delete(url).then( (resData) => 
  {       
    alert(resData.data.status);
    getDataButtonClick();
  });
}

function editProductClick(pid){
  const prodObj =ProductArray.find((item) => item.pid ==pid);

  if(prodObj){
    setpid(prodObj.pid);
    setpname(prodObj.pname);
    setpcategory(prodObj.pcategory);
    
  }
}

function updateProductButtonClick(){
  let prodObj ={
  pid :pid,
  pname: pname,
  pcategory:pcategory,};

  

  let url = "http://localhost:3005/pradapi/prods/${pid}";
  axios.put(url, prodObj).then((resData) => {
    // console.log(resData.data);
    alert("Record Updated");
    getDataButtonClick();
  });
  clearFields();
}

function clearFields() {
  setpid("");
  setpname("");
  setpcategory("");

  
}
let resultArray = ProductArray.map((item,index) => (
  <tbody key ={index}>
    <tr style={{ borderBottom: "1px solid #ddd" }}>
      {/* <td>{item.id}</td> */}
      <td align="center">{item.pid}</td>
      <td align="center">{item.pname}</td>
      <td align="center">{item.pcategory}</td>
      
          <button
            className="btn btn-primary ml-2 mx-2"
          onClick={() => editProductClick(item.pid)}
            >
            Edit
            </button>
         
    <button className="btn btn-danger mx-2"onClick={() =>prdDeleteButtonClick(item.pid) } 
    >
      Delete
      </button>
    </tr>
  </tbody>
));

return (
  <div style={ {"border":"2px solid blue", "padding":"10px", "padding-bottom":"15px", "backgroundColor" : "lightblue"}}>

    <h3>Product Details</h3>
    <hr/>
    <div class ="row">
    <div className="col-md-4"></div>
    </div>

    <input type="text" className="form-control mb-2" placeholder="product id"  value={pid} onChange={ (e) => setpid(e.target.value)} />
          <input type="text" className="form-control mb-2" placeholder="product Name" value={pname} onChange={ (e) => setpname(e.target.value)} />
          <input type="text"  className="form-control mb-2" placeholder="product category" value={pcategory} onChange={ (e) => setpcategory(e.target.value)} />
    <hr/>

    <button className="btn btn-dark mb-2" onClick={getDataButtonClick}>Get Data</button>
     <button className="btn btn-success mb-2 ml-2" onClick={addDataButtonClick}>Add Data</button>
     <button className="btn btn-warning mb-2 ml-2" onClick={updateProductButtonClick}>Update Data</button>

    <hr/>
    <table class="table table-success table-striped">
    
        <tr>
          <th className="text-center ">Product id</th>
          <th className="text-center">Product Name</th>
          <th className="text-center">Product category</th>
          <th className="text-left">Action</th>
          
        </tr>
        {resultArray} 
    </table>         

  </div>
);
}





export default ProductList;