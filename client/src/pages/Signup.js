
import React,{useState} from "react";
import API from "../utils/API"

const Signup =() =>{
  const [formState, setFormState] = useState({email: "", password: ""});
  const handleChange =(event) =>{
    console.log(event.target, "TEST");
    const {name,value}=event.target;
    setFormState ({
      ...formState, 
      [name]: value
    })

  }
  const  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event, "COOL")
    
    API.postSignup(
      {email: formState.email,
         password: formState.password
      }
    ).then(res => {
      console.log(res);
      
    })
  }

  return (
    <div className="container">

  <div className="row">
    
    <div className="col-xs-3"></div>
    <div className="col-xs-6">
      <h2 className="white">Sign Up</h2>
      <form className="login" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="white" htmlFor ="exampleInputEmail1">Email address</label>
          <input name="email"  onChange={handleChange}className="form-control"  value={formState.email} placeholder="Email"/>
        </div>
        <div className="form-group">
          <label className="white" htmlFor ="exampleInputPassword1">Password</label>
          <input name="password"  onChange={handleChange} className="form-control"  value={formState.password} placeholder="Password"/>
        </div>
        <button type="submit"   className="btn btn-info white">Sign Up</button>
      </form>
      <p className="white">Or Login<a href="/LoginInfo">here</a></p>

    </div>
  </div>
</div>

  );
}

export default Signup;
