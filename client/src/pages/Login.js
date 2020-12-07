import React,{useState} from "react";
import API from "../utils/API";
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
import "./pages.css";

function LoginInfo() {
  const [formState, setFormState] = useState({email: "", password: ""});

  const history = useHistory()
  const handleChange =(event) =>{
    // console.log(event.target, "TEST");
    const {name,value}=event.target;
    setFormState ({
      ...formState, 
      [name]: value
    })

  }
  const  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event, "COOL")
    
    API.postlogin(
      {email: formState.email,
         password: formState.password
      }
    ).then(res => {
      console.log(res);
      history.push("/Selection")
      
    })
  }

  return (
    <div className="container">
      <div className="row login">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <h2 className="white">Log In</h2>
          <form className="login" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="white" htmlFor ="exampleInputEmail1">Email Address</label>
              <input name="email"  onChange={handleChange} className="form-control"  value={formState.email} placeholder="Email"/>
            </div>
            <div className="form-group">
              <label className="white" htmlFor ="exampleInputPassword1">Password</label>
              <input name="password" type="password" onChange={handleChange} className="form-control"  value={formState.password} placeholder="Password"/>
            </div>
            <button type="submit"   className="btn btn-info white">Log In</button>
          </form>
          <p className="white">
            Or Sign Up
            <Link className="nav-link" to='/Signup'>here</Link>
          </p>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
);
}
export default LoginInfo;
