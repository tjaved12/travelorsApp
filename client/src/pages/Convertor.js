import React, {Component} from "react";
import API from "../utils/API"
import {useHistory} from 'react-router-dom'
import axios from "axios";

class Convertor extends Component {
  state = {
    currency:"",
   
  };

  
  componentDidMount() {
   
 axios.get("http://api.currencylayer.com/live?access_key=d738433b43524d560f4079256a7d254e&format=1")
    .then(res => {
       console.log(res)
       const currency=
       res.data.source;
       this.setState({currency})
    });
 }
   render() {
const currency = this.state.currency

    return (
      <div>
     
<h4>Currency Convertor</h4>
<p> Currency Source: {currency}</p>
      </div>
    )
  
    
    }
    };

    export default Convertor;

