
import React  ,{useState}from 'react';
import EmployeeTable from './EmployeeTable';
//import Demo from './Demo';
 //import Child1 from './Child1';
 //import Child2 from './Child2';
//export var userDetailsContext  = React.createContext(null);


//function App(){

  //let [userObj, setUserObj] = useState([
    //{ name : "Scott", age : 25, email : "scott@gmail.com"},
    //{name : "Pragyna" , age :24 ,email:"swain@gmail.com"},
    //{name :"subhasmita" , age :24,email:"subha@gmail.com"},
    //{name : "pratyusha" , age :21, email: "pratyusha@gmail.com"}
  //]);

   
    //return (
     // <div style={{margin:"10px", border:"2px solid Blue"}}>  
      //  <h3>This is the Parent Component</h3>    
       // <hr/>
       // <userDetailsContext.Provider  value={userObj}>
        //    <Child1 />
         //   <Child2/>
        //</userDetailsContext.Provider>  
          
      //</div>
   // );   
//}
function App(){
  return(

<div>
 <EmployeeTable/>
</div>
  );
}

export default App;








