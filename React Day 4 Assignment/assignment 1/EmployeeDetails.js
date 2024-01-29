import React ,{useState} from "react";
import axios from "axios";

function EmployeeDetails (){
    const [employees , setEmployees] = useState([]);

function getDataButton_click  () {
    let url ="https://cors-anywhere.herokuapp.com/https://dummy.restapiexample.com/api/v1/employees";
    
    axios.get(url).then((resData) => {
      setEmployees(resData.data.data);
    });
  }

  let resultArray=  employees.map((item) => (
   
    <div className="container mt-4">
      <div className="row">
   
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{item.employee_name}</h5>
                <p className="card-text">
                  <strong>Salary:</strong> {item.employee_salary}
                </p>
                <p className="card-text">
                  <strong>Age:</strong> {item.employee_age}
                </p>
              </div>
            </div>
          </div>
          </div>
          </div>
  ));
    


  return (

    <div style={{ padding: '5px' }}>
    <h3>Employee Details </h3>
    <hr />

    <input
      type="button"
      onClick={getDataButton_click}
      value="Get Data"
      className="btn btn-primary"
    />
    <div className="container mt-4">
    <div className="row">{resultArray}</div>
  </div>
</div>
);
  }


export default EmployeeDetails;

   