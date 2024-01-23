// import logo from './logo.svg';
import React from 'react';
import DeptList from './Deptlist';
import StudentDetail from './StudentDetails';
import DoctorList from './DoctorsDetails';

function App() {
  return (
    <>
      <h3 align="center">Welcome to React Applications</h3>
      <hr />

       <StudentDetail/>

       <hr/>

       <DoctorList/>
    </>
  );
}

export default App;