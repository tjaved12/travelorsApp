import React from "react";
// import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function CountryCard(props) {
    console.log(props.userInfo)
  return (
    <div className="container">
      <div className="opaque whiteText protocol center" id={props.userInfo.country}>
        <h4>Country Name: {props.userInfo.country}</h4>
        <div>
          <p> Capital City: {props.userInfo.capital}</p>
          <p> Rule 1: {props.userInfo.rule1}</p>
          <p> Rule 2: {props.userInfo.rule2}</p>
          <p> CDC Advisory: {props.userInfo.advisory}</p>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;