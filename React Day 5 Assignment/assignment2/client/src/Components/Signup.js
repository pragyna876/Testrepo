import React, { useState } from 'react';
import axios from 'axios';

function SignUp() {
  const [uid, setUserId] = useState("");
  const [pwd, setPassword] = useState("");
  const [result, setResult] = useState("");

  function signUpButton_click() {
    let url = "http://localhost:3005/users/signUp";
    axios.post(url, { uid, pwd }).then((resData) => {
    //   console.log(resData.data);
      setResult(resData.data.message)
    }).catch(error => {
      console.error('Sign-up failed', error.response.data);
    });
  }

  return (
    <>
      <fieldset>
        <legend>Create New Account</legend>

        <label>User Id  : </label>
        <input type="text" value={uid} onChange={(event) => setUserId(event.target.value)} />
        <br /><br />

        <label>Password  : </label>
        <input type="password" value={pwd} onChange={(event) => setPassword(event.target.value)} />
        <br /><br />

        <input type="button" onClick={signUpButton_click} value="Sign Up" />
        <p style={{ color: "red" }}>{result}</p>
      </fieldset>
    </>
  );
}

export default SignUp;