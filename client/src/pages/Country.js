import React, {Component} from "react";
// import API from "../utils/API"
// import {useHistory} from 'react-router-dom'
import axios from "axios";
import {Link} from 'react-router-dom';
import { Card } from "react-bootstrap";
import { CardDeck } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

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
        <div className="center">
          <h1 className="whiteText center">{name}</h1>
          <img className="center flag" src={flag} alt="countryflag"/>
          <h5 className="whiteText center">Population: {population}</h5>
        </div>
        <CardDeck>
          <Card className="opaque" style={{ width: '18rem' }}>
            <Card.Body className="whiteText" >
              <Card.Header>Today</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Cases: {todayCases}</ListGroup.Item>
                <ListGroup.Item>Active Cases: {active}</ListGroup.Item>
                <ListGroup.Item>Critical Cases: {critical}</ListGroup.Item>
                <ListGroup.Item>Deaths: {todayDeaths}</ListGroup.Item>
                <ListGroup.Item>Recorvered: {todayRecovered}</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          <Card className="opaque" style={{ width: '18rem' }}>
            <Card.Body className="whiteText">
              <Card.Header>Cumulative</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Cases: {cases}</ListGroup.Item>
                <ListGroup.Item>Deaths: {deaths}</ListGroup.Item>
                <ListGroup.Item>Recovered: {recovered}</ListGroup.Item>
                <ListGroup.Item>Tested: {tests}</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          <Card className="opaque" style={{ width: '18rem' }}>
            <Card.Body className="whiteText">
              <Card.Header>Per One Million People</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Cases: {casesPerOneMillion}</ListGroup.Item>
                <ListGroup.Item>Deaths: {deathsPerOneMillion}</ListGroup.Item>
                <ListGroup.Item>Tests: {testsPerOneMillion}</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </CardDeck>               
        <div>
          <p className="white">
            {' '}
            <Link className="nav-link" to='/Protocols'>See the Protocols</Link>
          </p>
          <p className="white">
            {' '}
            <Link className="nav-link" to='/Selection'>Go Back to Selection</Link>
          </p>
          <p className="white">
            {' '}
            <Link className="nav-link" to='/'>Log Out</Link>
          </p>
        </div>
      </div>
    )
  };
}

export default Country ;