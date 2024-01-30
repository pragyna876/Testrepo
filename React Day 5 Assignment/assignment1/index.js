import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Contact from './Components/Contact';
import About from './Components/About';
import Emps from './Components/Emps';
import Depts from './Components/Depts';
import NotFound from './Components/NotFound';
import Details from './Components/Details';
import DoctorsDetails from './Components/DoctorsDetails';
import Login from './Components/Login';
import ProtectedRoute from './Components/ProtectedRoute';


const routing = (
  <Router>
    <h3 style={{ textAlign: "center" }}>Routing Implementation using React JS Applications</h3>
    <hr />
    <div style={{ textAlign: "center" }}>
      <Link to="/">Home</Link> |
      <Link to="/Emps">Employees</Link> |
      <Link to="/Depts">Departments</Link> |
      <Link to="/About">About Us</Link> |
      <Link to="/Contact">Contac Us</Link> |
      <Link to ="/Doctor">Doctor Details</Link>
      <Link to="/Hello">Invalid Route</Link> |
      <Link to="/Login">Login</Link> |
    </div>
    <hr />
    <Routes>
      <Route path="/" element={<App />} />


      <Route path="/Emps" element={
        <ProtectedRoute  returnUrl="/Emps">
          <Emps />
        </ProtectedRoute>
      } />

      <Route path="/Depts" element={
        <ProtectedRoute  returnUrl="/Depts">
          <Depts />
        </ProtectedRoute>
      } />



      <Route path="/Contact" element={<Contact />} />
      <Route path="/About" element={<About />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Details/:id" element={<Details />} />
      <Route path ="/Doctor" element={<DoctorsDetails/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>



  </Router>
);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {routing}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();