// App.js
import React, { useState } from 'react';
import ProductList from './ProductList';

function App() {
  let  ProductData =  [
    {  pid : 10256, pname:"Samsung", category:"Mobiles" },
    {  pid : 10257, pname:"HP", category:"Laptops" },
    {  pid : 10258, pname:"Redmi", category:"Mobiles"  },
    {  pid : 10259, pname:"DELL", category:"Laptops" },
    {  pid : 10260, pname:"VIVO", category:"Mobiles"  },
    {  pid : 10261, pname:"Asus", category:"Laptops" }  
];
const [selectCategory,setSelectCategory]=useState("")

const displayProductByCategory=(category) => {
  if(category== "All"){
    return ProductData.map(product => 
      <ProductList key={product.pid}
      empObj={product} />
      );
  }
    else{
  const filterProducts=ProductData.filter(product =>
    product.category == category);
    return filterProducts.map(product =>
    
      <ProductList key={product.pid} empObj={product}/>
    );
    
}
};
return (
    <>
    <div style={{backgroundColor:"gray"}}>
      <div style={{ "textAlign":"center", "padding":"10px"}}>
      <select id='categoryDropdown' onChange={(e) => setSelectCategory(e.target.value)} value={selectCategory} style={{ "padding":"5px" , "margin":"10px", "fontSize":"16px"}}>
      <option value="">Select Category</option>
        <option value="All">All</option>
        <option value="Mobiles">Mobiles</option>
        <option value="Laptops">Laptops</option>
      </select>
    </div>
    <div>
    {displayProductByCategory(selectCategory)}
    </div>
      
    </div>

                     
    </>
);

}

export default App;






