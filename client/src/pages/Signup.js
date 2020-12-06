import React,{useState} from "react";
import API from "../utils/API"
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom';
import classes from './BackgroundVideo.module.css';

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
    <div className={classes.Container}>
      <img src="https://lh3.googleusercontent.com/2NWt-FYrIy56hxHyJ8Ga7xP5KA1uTKL-C-zE6ebp_a-V0hEieIcO5Tpfp9nWCjlhKSjH6RJ_cA2HpiG231aIyxQ-7B9EI-NwywCEJHlJI0F1VjE9ISUInE6V-N6-YKAMLeMoG29rgvdz__9b3VPndN7y5EeLK0jNTEpQ_ttUSqYnybz1_YbEWMl7Z-GDly00uIWf64DOVgU3wMNhjSRO6XozcddE4jHJ6-6cpg1SWUmYH-P5H94BKS5R_OTklnP3U1Nxj-TFuFL8QRcUW7GFXQSGNnD_dzl58gH7nIJzDWJlWFTy2XP4Nu2kyVfqDiRbHsQy-pvOmUrEMMvzxz-4HUeqQyQUzQSysOFSPIBb9z41EIeTfAkQPsBfmsB9IdKBd55moujXao5NGGGA0Jdq1B5JmhJUGfeKydbZuZbSlOH1IwrAeaBwoyG_nW0wpQ_hS2KJX5tfnwuLrQ2yaewuurdv7jYrzMCay1Dc9qmev79IcC7bvRSWEHhAZeq0-3FDxflJngGVfuhEAiOYtv8qGyr3uiSOy-qT6JWMdCrhlGGMryFPqYkH_-It9GIzohy49WEnoL8EvJM0cBgou2dW7JFb1P9ZHKUd4Rw9b-JnahbgOwLc0jDQ4ZjhGZawSzxLD9BGNqFT2-pb0shkod-oIvgJBY07u7d0-skmk94BCFKLlhaP14pbbsq9VDl2sWU=w956-h717-no?authuser=0" alt="travel" />
      <div className={classes.Content}>
        <div className={classes.SubContent}>        
          <div className="col-xs-3"></div>
          <div className="col-xs-6">
            <h2 className="white">Sign Up</h2>
            <form className="login" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="white" htmlFor ="exampleInputEmail1">Email Address</label>
                <input name="email"  onChange={handleChange} className="form-control"  value={formState.email} placeholder="Email"/>
              </div>
              <div className="form-group">
                <label className="white" htmlFor ="exampleInputPassword1">Password</label>
                <input name="password" type ="password" onChange={handleChange} className="form-control"  value={formState.password} placeholder="Password"/>
              </div>
              <button type="submit"   className="btn btn-info white">Sign Up</button>
            </form>
            <p className="white">
              OR Login
              <Link className="nav-link" to='/LoginInfo'>here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>


  );
}

export default Signup;
