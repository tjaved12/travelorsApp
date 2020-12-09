import React from "react";
// import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function CountryCard(props) {
    console.log(props.userInfo)
  return (
    <div className="container">
      <div className="opaque whiteText protocol" id={props.userInfo.country}>
        <h4>Country Name: {props.userInfo.country}</h4>
        <ul>
          <li> Capital City: {props.userInfo.capital}</li>
          <li> Rule 1: {props.userInfo.rule1}</li>
          <l1> Rule 2: {props.userInfo.rule2}</l1>
          <li> CDC Advisory: {props.userInfo.advisory}</li>
        </ul>
      </div>
    </div>
  );
}

export default CountryCard;
