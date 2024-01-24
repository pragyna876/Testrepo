function ProductList(props)
{ 
    
    return(
        
        <div style={{"float":"left" }} > 
            <div style={ {border : "2px solid gray",  borderRadius:"8px", padding :  "15px",  margin :  "10px",  width : "250px",boxShadow:"0 4px 8px gray "} }>
                <span> Product Id  :  {props.empObj.pid}  </span> <br/> 
                <span> Product Name  :  {props.empObj.pname}  </span> <br/> 
                <span> Product Category  :  {props.empObj.category}  </span> <br/> 
                <hr/>
                
                
            </div>
        </div>
        
    );
    
}


export default ProductList;