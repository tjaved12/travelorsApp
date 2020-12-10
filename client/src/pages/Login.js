import React,{useState} from "react";
import API from "../utils/API";
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
import "./pages.css";
import logo from "./hummingbirdlogo.png"

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
      <div className="row">
        <div type="Text" className="col-lg-4" ></div>
        <div type="Text" className="col-lg-4 center" >
          <div className="logo">
            <img className="logoImg" variant="top" src={logo} alt="travidlogo"/>
            <h1 className="whiteText">TravidWallet</h1>
            <h5 className="whiteText">Travel Safe, Budget Smart</h5>
          </div>
        </div>
        <div type="Text" className="col-lg-4" ></div>
      </div>
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4 center opaque">
          <h2 className="whiteText">Log In</h2>
          <form className="login" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="whiteText" htmlFor ="exampleInputEmail1">Email Address</label>
              <input name="email"  onChange={handleChange} className="form-control"  value={formState.email} placeholder="Email"/>
            </div>
            <div className="form-group">
              <label className="whiteText" htmlFor ="exampleInputPassword1">Password</label>
              <input name="password" type="password" onChange={handleChange} className="form-control"  value={formState.password} placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-info">Log In</button>
          </form>
          <br></br>
          <p className="center whiteText">
            Don't have an account?
          </p>
          <p>
          <Link className="center nav-link" to='/Signup'>Sign Up Here</Link>
          </p>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
);
}
export default LoginInfo;
