import React from "react";


function SignUpInfo() {
 

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
        <button type="submit" className="btn btn-info white">Sign Up</button>
      </form>
      <p className="white">Or Login<a href="/LoginInfo">here</a></p>

    </div>
  </div>
</div>

  );
}

export default SignUpInfo;
