import React, {Component} from "react";
// import API from "../utils/API"
// import {useHistory} from 'react-router-dom'
import axios from "axios";
import {Link} from 'react-router-dom';
import logo from "./hummingbirdlogo.png"
import { Button } from "react-bootstrap"
 
class Country extends Component {
  state = {
    countryName:"",
    cases:[],
    todayCases:[],
    deaths:[],
    todayDeaths:[],
    recovered:[],
    todayRecovered:[],
    active:[],
    critical:[],
    casesPerOneMillion:[],
    deathsPerOneMillion:[],
    tests:[],
    testsPerOneMillion:[],
    population:[],
    flag:"",
    countrySelected:[{}]
  };

  componentDidMount() { 
    console.log(window.location.pathname)
    const countryName = window.location.pathname.substring(1)
    console.log(countryName)
    this.setState({countryName})
    axios.get("https://corona.lmao.ninja/v2/countries/"+ countryName +"?yesterday=true&strict=true&query")
      .then(res => {
        const flag =
        res.data.countryInfo.flag
        this.setState({flag})

        const countryName =
        res.data.country;
        this.setState({countryName});

        const cases =
        res.data.cases;
        this.setState({cases});

        const deaths =
        res.data.deaths;
        this.setState({deaths});

        const todayCases =
        res.data.todayCases
        this.setState({todayCases});

        const todayDeaths =
        res.data.todayDeaths
        this.setState({todayDeaths});

        const recovered =
        res.data.recovered
        this.setState({recovered});

         const todayRecovered =
        res.data.todayRecovered
        this.setState({todayRecovered});

        const active=
        res.data.active
        this.setState({active});

        const critical =
        res.data.critical
        this.setState({critical});

        const casesPerOneMillion =
        res.data.casesPerOneMillion
        this.setState({casesPerOneMillion});

        const deathsPerOneMillion = 
        res.data.deathsPerOneMillion
        this.setState({deathsPerOneMillion});

        const tests = 
        res.data.tests
        this.setState({tests});

        const testsPerOneMillion = 
        res.data.testsPerOneMillion
        this.setState({testsPerOneMillion});

        const population = 
        res.data.population
        this.setState({population});
      });
  };
  
  render() {
    const name = this.state.countryName;
    const cases = this.state.cases;
    const todayCases = this.state.todayCases;
    const todayDeaths = this.state.todayDeaths;
    const deaths = this.state.deaths;
    const flag = this.state.flag
    const recovered = this.state.recovered;
    const active = this.state.active;
    const todayRecovered = this.state.todayRecovered;
    const critical = this.state.critical;
    const casesPerOneMillion = this.state.casesPerOneMillion;
    const deathsPerOneMillion = this.state.deathsPerOneMillion;
    const tests = this.state.tests;
    const testsPerOneMillion = this.state.testsPerOneMillion;
    const population = this.state.population;

    return (
      <div className="container">
        <div className="row">
          <div type="Text" className="col-sm-4" ></div>
          <div type="Text" className="col-sm-4 center" >
            <div className="logo">
              <img className="countryImage" variant="top" src={logo} alt="travidlogo"/>
              <h1 className="whiteText">TravidWallet</h1>
              <h5 className="whiteText">Travel Safe, Budget Smart</h5>
            </div>
          </div>
          <div type="Text" className="col-sm-4"></div>
        </div>
        <div className="row">
          <Button variant="info" className="col-sm-3 navBtn btnMargin"> 
            <Link className="nav-link" to='/Selection'>Return to Country Select</Link>
          </Button>
          <div class="col-sm-6"></div>
          <Button variant="info" className="col-sm-3 navBtn btnMargin"> 
            <Link className="nav-link" to='/Protocols'>Proceed to Requirements</Link>
          </Button>
        </div>
        <div className="row">
          <div className="center">
            <h1 className="whiteText">{name}</h1>
            <img className="center flag" src={flag} alt="countryflag"/>
            <h3 className="whiteText">Population: {population}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4 whiteText center opaque statCard">
            <h2>Today</h2>
            <ul className="center">
              <li>Cases: {todayCases}</li>
              <li>Active Cases: {active}</li>
              <li>Critical Cases: {critical}</li>
              <li>Deaths: {todayDeaths}</li>
              <li>Recorvered: {todayRecovered}</li>
            </ul> 
          </div>
          <div className="col-sm-4"></div>
        </div>
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4 whiteText center opaque statCard">
            <h2>Cumulative</h2>
            <ul className="center">
              <li>Cases: {cases}</li>
              <li>Deaths: {deaths}</li>
              <li>Recovered: {recovered}</li>
              <li>Tested: {tests}</li>
            </ul>
          </div>
          <div className="col-sm-4"></div>
        </div>
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4 whiteText center opaque statCard">
            <h2>Per One Million People</h2>
            <ul className="center">
              <li>Cases: {casesPerOneMillion}</li>
              <li>Deaths: {deathsPerOneMillion}</li>
              <li>Tested: {testsPerOneMillion}</li>
            </ul> 
          </div>
          <div className="col-sm-4"></div>
        </div>
        <div className="row">             
          <div className="col-sm-12">
            <p className="white">
              <Link className="center nav-link" to='/'>Log Out</Link>
            </p>
          </div>
        </div>
      </div>
    )
  };
}

export default Country ;