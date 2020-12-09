import React, {useState} from "react";
import {Link} from 'react-router-dom';
import{Dropdown} from 'react-bootstrap';
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
        <div type="Text" className="col-lg-4" ></div>
        <div type="Text" className="col-lg-4 center" >
          <div className="logo">
            <img className="countryImage" variant="top" src="./pictures/hummingbirdlogo.png" alt="travidlogo"/>
            <h1 className="whiteText">TravidWallet</h1>
            <h6 className="whiteText">Travel Safe, Budget Smart</h6>
          </div>
        </div>
        <div type="Text" className="col-lg-4" ></div>
      </div>
      <div className="row">
        <div className="whiteText center col-lg-12"> 
          <h1>Destination Requirements</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4"> 
          <Link className="center nav-link" to='/Convertor'>Currency Converter</Link>
        </div>
        <div className="col-lg-4"> 
          <Link className="center nav-link" to='/Selection'>Country Selection</Link>
        </div>
        <div className="col-lg-4"> 
          <Link className="center nav-link" to='/'>Log Out</Link>	
        </div>
      </div>
      <div className="row">
        <div className="whiteText center col-lg-12"> 
          <h5>Country Index</h5>
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Select the Country
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#Argentina">Argentina</Dropdown.Item>
            <Dropdown.Item href="#Auatralia">Australia</Dropdown.Item>
            <Dropdown.Item href="#Brazil">Brazil</Dropdown.Item>
            <Dropdown.Item href="#Canada">Canada</Dropdown.Item>
            <Dropdown.Item href="#China">China</Dropdown.Item>
            <Dropdown.Item href="#Egypt">Egypt</Dropdown.Item>
            <Dropdown.Item href="#France">France</Dropdown.Item>
            <Dropdown.Item href="#India">India</Dropdown.Item>
            <Dropdown.Item href="#Italy">Italy</Dropdown.Item>
            <Dropdown.Item href="#Japan">Japan</Dropdown.Item>
            <Dropdown.Item href="#Mexico">Mexico</Dropdown.Item>
            <Dropdown.Item href="#Morocco">Morocco</Dropdown.Item>
            <Dropdown.Item href="#NetherLand">Netherland</Dropdown.Item>
            <Dropdown.Item href="#Spain">Spain</Dropdown.Item>
            <Dropdown.Item href="#Vietnam">Vietnam</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <h10>Please select a country to see the destination requirements</h10>
      </div>
    </div>
    {users.map(user => {
      return (
        <div className="whiteText">
          <CountryCard userInfo={user}></CountryCard>
        </div>
      )
    })}
  </div>
)};
  
  


   