import React from "react";
import API from "../utils/API"


function LoginInfo() {
 
const  handleSubmit = (event) => {
   console.log(event)
   console.log('cooll')

   API.postlogin(
     {"name": "Leigh"}
   ).then(res => {
     console.log(res)
   })
 }
  return (
    <div className="container">

  <div className="row">
    
    <div className="col-xs-3"></div>
    <div className="col-xs-6">
      <h2 className="white">Login</h2>
      <form className="login">
        <div className="form-group">
          <label className="white" for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="email-input" placeholder="Email"/>
        </div>
        <div className="form-group">
          <label className="white" for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="password-input" placeholder="Password"/>
        </div>
        <button type="submit" onClick={(event)=> handleSubmit(event)} className="btn btn-info white">Login </button>
      </form>
      <p className="white">Or sign up <a href="/Signup"> here</a></p>

    </div>
  </div>
</div>

  );
}

export default LoginInfo;
