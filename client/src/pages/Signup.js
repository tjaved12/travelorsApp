import React,{useState} from "react";
import API from "../utils/API";
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';

const Signup =() =>{
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
    
    API.postSignup(
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
        <div type="Text" className="col-lg-12 center" ></div>
        <div type="Text" className="col-lg-12 center" ></div>
        <div type="Text" className="col-lg-12 center" >
          <div>
            <img className="countryImage" variant="top" src="./pictures/hummingbirdlogo.png" alt="travidlogo"/>
            <h1 className="whiteText">TravidWallet</h1>
            <h8 className="whiteText">Travel Safe, Budget Smart</h8>
          </div>
        </div>
      </div>
      <div type="Text" className="col-lg-12 center" ></div>
      <div type="Text" className="col-lg-12 center" ></div>
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
            <h2 className="whiteText">Sign Up</h2>
            <form className="login" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="whiteText" htmlFor ="exampleInputEmail1">Email Address</label>
                <input name="email"  onChange={handleChange} className="form-control"  value={formState.email} placeholder="Email"/>
              </div>
              <div className="form-group">
                <label className="whiteText" htmlFor ="exampleInputPassword1">Password</label>
                <input name="password" type ="password" onChange={handleChange} className="form-control"  value={formState.password} placeholder="Password"/>
              </div>
              <button type="submit" className="btn btn-info whiteText">Sign Up</button>
            </form>
            <br></br>
            <p className="center whiteText">
              Already have an account?
            </p>
            <p>
              <Link className="center nav-link" to='/LoginInfo'>Log in here</Link>
            </p>
          </div>
          <div className="col-lg-4"></div>
        </div>
    </div>
  );
}

export default Signup;
