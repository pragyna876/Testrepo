// import logo from './logo.svg';
import React from 'react';
import { useState } from 'react';
import Deptlist from './Deptlist';
import StudentDetail from './StudentDetails';
import DoctorList from './DoctorsDetails';
import Product from './Product';
import EmployeeList from './Employeelist';
function App() {
  return (
    <>
      <h3 align="center">Welcome to React Applications</h3>
      

       <hr/>

       

      <EmployeeList/>
    </>
  );
}

export default App;