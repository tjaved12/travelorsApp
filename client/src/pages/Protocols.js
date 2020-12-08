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
        <div className="col-lg-12"> 
          <h3>Rules On Main Port of Entry</h3>
					<Link className="nav-link" to='/Convertor'>Go ahead to Currency Convertor</Link>
					<Link className="nav-link" to='/Selection'>Go Back to Selection</Link>
          <Link className="nav-link" to='/'>Log Out</Link>	
          {users.map(user => {
            return (
                  <CountryCard userInfo={user}></CountryCard>
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

   