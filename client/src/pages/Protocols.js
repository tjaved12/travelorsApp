import React, {useState} from "react";
import {Link} from 'react-router-dom';
import{Dropdown} from 'react-bootstrap';
//import React,{useState} from "react";
//import "../style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import rules from "../rules.json";
import CountryCard from "../components/CountryCard"
import logo from "./hummingbirdlogo.png"


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
            <img className="countryImage" variant="top" src={logo} alt="travidlogo"/>
            <h1 className="whiteText">TravidWallet</h1>
            <h5 className="whiteText">Travel Safe, Budget Smart</h5>
          </div>
        </div>
        <div type="Text" className="col-lg-4" ></div>
      </div>
      <div className="row">
        <div className="col-lg-6"> 
          <Link className="center nav-link" to='/Selection'>Return to Country Select</Link>
        </div>
        <div className="col-lg-6"> 
          <Link className="center nav-link" to='/Convertor'>Proceed to Currency Converter</Link>
        </div>
      </div>
      <div className="row">
        <div className="whiteText center col-lg-12"> 
          <h1>Destination Requirements</h1>
        </div>
      </div>
      <div className="row">
        <div className="whiteText center col-lg-12"> 
          <h4>Country Index</h4>
          <h5>Please select a country to see the destination requirements</h5>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">Select a Country</Dropdown.Toggle>
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
        </div>
      </div>
      <div className="row">
        <div className="whiteText col-lg-12"> 
          {users.map(user => {
            return (
              <div className="whiteText">
                <CountryCard userInfo={user}></CountryCard>
              </div>
            )})}
        </div>
        <Link className="center nav-link" to='/'>Log Out</Link>	
      </div>
    </div>
  )
};
  
  


   