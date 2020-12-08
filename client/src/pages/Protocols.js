import React, {useState} from "react";
import {Link} from 'react-router-dom';
//import React,{useState} from "react";
//import "../style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import rules from "../rules.json";
import CountryCard from "../components/CountryCard"


export default function Protocols() {

const [users, setUsers] = useState(
  rules
)

console.log(users)

  return (
    <div className='container'>
      <div className="row">
        <div className="whiteText center col-lg-12"> 
          <h1>Rules On Main Port of Entry</h1>
          </div>
          <div className="col-lg-12"> 
					<Link className="center nav-link" to='/Convertor'>Go ahead to Currency Convertor</Link>
					<Link className="center nav-link" to='/Selection'>Go Back to Selection</Link>
          <Link className="center nav-link" to='/'>Log Out</Link>	
          <div>
              <a className="center nav-link" href="#Argentina">Argentina</a>
              <a className="center nav-link" href="#Australia">Australia</a>
              <a className="center nav-link" href="#Brazil">Brazil</a>
              <a className="center nav-link" href="#Canada">Canada</a>
              <a className="center nav-link" href="#China">China</a>
              <a className="center nav-link" href="#Egypt">Egypt</a>
              <a className="center nav-link" href="#France">France</a>
              <a className="center nav-link" href="#India">India</a>
              <a className="center nav-link" href="#Italy">Italy</a>
              <a className="center nav-link" href="#Japan">Japan</a>
              <a className="center nav-link" href="#Mexico">Mexico</a>
              <a className="center nav-link" href="#Morocco">Morocco</a>
              <a className="center nav-link" href="#Netherland">Netherland</a>
              <a className="center nav-link" href="#Spain">Spain</a>
              <a className="center nav-link" href="#Vietnam">Vietnam</a>

          </div>
          {users.map(user => {
            return (
              <div className="whiteText">
                <CountryCard userInfo={user}></CountryCard>
              </div>
          )})}
        </div>
      </div>
    </div>
   
)};
  
  

// state = {
    //   rules,
    //   country: "",
    //   capital: "",
    //   rule1: "",
    //   rulescopy: [{}]
    
    // }

 
  // componentDidMount() {
  //   this.setState({rulesCopy: this.state.rules})
  // }

  // render() {

  //   {this.state.rules.map(rule => (
  //     <Protocols
  //       country={rule.name}
  //       capital={rule.capital}
  //       rule={rule.rule1}
  //     />
  //   ))}


    {/* <div className="col-sm-2 col-md-2 col-lg-2" id ="content">
           {props.name}
            </div> */}
            {/* <div className="col-sm-2 col-md-2 col-lg-1" id ="content1">
           {props.country}
            </div>
            <div className="col-sm-2 col-md-2 col-lg-3" id ="content2">
          {props.capital}
            </div>
            <div className="col-sm-2 col-md-2 col-lg-3" id ="content3">
          {props.rule1} */}
            {/* </div> */}
               
       
      {/* <span onClick={() => props.removeEmployee(props.id)} className="remove">
        𝘅
      </span> */}

      

          {/* {this.state.rules.map(rule => (
      <Protocols
        country={rule.name}
        capital={rule.capital}
        rule={rule.rule1}
      />
    ))} */} 

   