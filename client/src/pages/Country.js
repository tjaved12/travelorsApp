import React, {Component} from "react";
import API from "../utils/API"
import {useHistory} from 'react-router-dom'
import axios from "axios";

class Country extends Component {
  state = {
    countryName:"",
    numbers:[],
    deaths:[],
    countrySelected:[{}]
  };

  
  componentDidMount() {
    
  console.log(window.location.pathname)
  
  const countryName = window.location.pathname.substring(1)
  console.log(countryName)
   console.log("testtttt", countryName);
   this.setState({countryName})
  
  axios.get("https://corona.lmao.ninja/v2/countries/"+ countryName +"?yesterday=true&strict=true&query")
      .then(res => {
        const countryName=
         res.data.country;
         this.setState({countryName});
        const numbers=
        res.data.cases;
        this.setState({numbers})
        const deaths=
        res.data.deaths;
        this.setState({deaths})
       
      });
  };
  
  render() {
const name= this.state.countryName;
const number=this.state.numbers;
const deaths=this.state.deaths

    return (
      <div>
     
<h4>Country:  {name}</h4>
<p>Current Covid Cases:  {number}</p>
<p>Today's Death Numbers:  {deaths}</p>
<br></br>
<p className="white"> <a href="/Convertor">Go Ahead</a></p>
<br></br>
<p className="white"> <a href="/Selection">Go Back</a></p>
      </div>
    )
  };
}


export default Country ;
