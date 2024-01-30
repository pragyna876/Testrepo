import axios from 'axios';
import { useContext } from 'react';
import { userDetailsContext } from './App';

function Child3(props){
    var  contextData  = useContext(userDetailsContext);

    return <div style={{margin:"10px", border:"2px solid Red"}}>  
          <h3>This is Child 3 Component</h3>       
          <hr/>
            <ul>
              {contextData.map((userDetails,index)=>(
                <li key ={index}>Name :{userDetails.name},Age:{userDetails.age}, Email:{userDetails.email}</li>
              ))}
            </ul>
          </div>
          
          
              }
          

        export default Child3;
