import { useState } from "react";
function Product() 
{
    const[pname, setPname] = useState("samsung LG Tv");
    const[pprice, setPprice] = useState(12000);
    const[quantity,setQuantity]=useState(1);
    const[count, setCount] = useState(0);

    function buttonClick(){
        setCount(count+(pprice*quantity));
    }

    return(
        <>
          <fieldset>

          <legend>
           Product Details   </legend>
           Product Name : {pname}<br/>
           Product Price : {pprice}<br/>
           Quantity : {quantity} <br/>
           <input type ="button" onClick={buttonClick} value ="Get Total"/>
           <h3>Count:{count}</h3>

    
          </fieldset>
        </>
    )
}

export default Product;