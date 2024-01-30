import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {

  const [uid, setUserId] = useState("");
  const [pwd, setPassword] = useState("");
  const [result, setResult] = useState("");

  let navigate = useNavigate(); // for navigation using code
  let location = useLocation(); // for reading query string params

  function loginButton_click() {

    const queryString = location.search; // returns the query string from the current url
    let strReturnUrl = new URLSearchParams(queryString).get('returnUrl');


    if (strReturnUrl == null) {
      strReturnUrl = "/";
    }

    let url = "http://localhost:3005/users/validate";
    axios.post(url, { uid, pwd }).then((resData) => {
      // console.log(resData.data);
      // console.log(resData.data.uid);
      // console.log(resData.data.pwd);
      if (uid == resData.data.uid && pwd == resData.data.pwd) {         
        let token = "ASJDFJF87ADF8745LK4598SAD7FAJSDF45JSDLFKAS";
        sessionStorage.setItem('user-token', token);
        navigate(strReturnUrl);
      }
      else {
        // setResult("Invalid User Id or Password");
        setResult(resData.data.message);
      }
    });
  }


  return (
    <>
      <fieldset>
        <legend>User Login</legend>

        <label>User Id  : </label>
        <input type="text" value={uid} onChange={(event) => setUserId(event.target.value)} />
        <br /><br />

        <label>Password  : </label>
        <input type="password" value={pwd} onChange={(event) => setPassword(event.target.value)} />
        <br /><br />

        <input type="button" onClick={loginButton_click} value="Login" />
        <p style={{ color: "red" }}>{result}</p>
      </fieldset>
    </>
  );

}

export default Login;