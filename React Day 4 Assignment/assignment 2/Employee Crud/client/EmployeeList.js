import React, { useState } from "react";
import axios from "axios";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    id: "",
    name: "",
    age: "",
    email: "",
    mobile: "",
  });

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api");
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({
      ...newEmployee,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/create", {
        id: newEmployee.id,
        name: newEmployee.name,
        age: newEmployee.age,
        email: newEmployee.email,
        mobile: newEmployee.mobile,
    });
        
      fetchData();
      setNewEmployee({
        id: "",
        name: "",
        age: "",
        email: "",
        mobile: "",
      });
    } catch (error) {
      console.error("Error creating employee:", error);
    }
  };

  const handleDelete = async (id) => {

    let flag = window.confirm("Are you sure want to delete?");    
    if(  !flag   )
    {
        return;
    }
  
    try {
      await axios.delete(`http://localhost:8080/api/delete/${id}`);
      fetchData();
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  const handleEdit = (employee) => {
    setNewEmployee({ ...employee });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:8080/api/update/${newEmployee.id}`, newEmployee);
      fetchData();
      setNewEmployee({
        id: "",
        name: "",
        age: "",
        email: "",
        mobile: "",
      });
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Employee List</h2>
      
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.age}</td>
              <td>{employee.email}</td>
              <td>{employee.mobile}</td>
              <td>
                <button className="btn btn-danger ml-2" onClick={() => handleDelete(employee.id)}>Delete</button>
                <button className="btn btn-primary ml-2" onClick={() => handleEdit(employee)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Add/Edit Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">

        <label htmlFor="id" className="form-label">ID</label>
          <input type="text" className="form-control" id="id" name="id" value={newEmployee.id} onChange={handleInputChange} />
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={newEmployee.name} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age</label>
          <input type="text" className="form-control" id="age" name="age" value={newEmployee.age} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={newEmployee.email} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">Mobile</label>
          <input type="text" className="form-control" id="mobile" name="mobile" value={newEmployee.mobile} onChange={handleInputChange} />
        </div>
        <button className="btn btn-primary mb-3 ml-2" onClick={fetchData}>Get Employee Data</button>
        <button type="submit" className="btn btn-primary mb-3 ml-2">Add Employee</button>
        <button type="button" className="btn btn-success  mb-3 mx-2" onClick={handleUpdate}>Update Employee</button>
      </form>
    </div>
  );
};

export default EmployeeList;
