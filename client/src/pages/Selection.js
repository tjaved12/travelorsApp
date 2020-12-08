import React from "react";
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom';

function Selection() {
  const history = useHistory()
  const  handleSubmit = (country) => {
    //event.preventDefault();
    console.log("It clicked!!")
    console.log(country)
      history.push(`/${country}`)
      
    // })
  }

  return (
    <div className="container">
      <div className="row">
        <div type="Text" className="col-lg-12 country center" >
          <div>
            <h1 className="whiteText">Country Selection</h1>
          </div>
          <div>
            <h5 className="whiteText">Please select a country below to view their Covid-19 Statistics</h5>
          </div>
        </div>
      </div>
      <div className="row">
        <div type="submit" className="col-lg-3 country center" onClick={() => {handleSubmit("Argentina")}}>
          <img className="countryImage" variant="top" src="./pictures/argentina01.jpeg" alt="Argentina" />
          <div>
            <h3 className="whiteText">Argentina</h3>
          </div>
        </div>
        <div type="submit" className="col-lg-3 country center" onClick={() => {handleSubmit("Australia")}}>
          <img className="countryImage" variant="top" src="./pictures/australia03.jpeg" alt="Australia" />
          <div>
            <h3 className="whiteText">Australia</h3>
          </div>
        </div>
        <div type="submit" className="col-lg-3 country center" onClick={() => {handleSubmit("Brazil")}}>
          <img className="countryImage" variant="top" src="./pictures/brazil01.jpeg" alt="Brazil" />
          <div>
            <h3 className="whiteText">Brazil</h3>
          </div>
        </div>
        <div type="submit" className="col-lg-3 country center" onClick={() => {handleSubmit("Canada")}}>
          <img className="countryImage" variant="top" src="./pictures/canada.jpeg" alt="Canada" />
          <div>
            <h3 className="whiteText">Canada</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div type="submit" className="col-lg-3 country center" onClick={() => {handleSubmit("China")}}>
          <img className="countryImage" variant="top" src="./pictures/china03.jpeg" alt="China" />
          <div>
            <h3 className="whiteText">China</h3>
          </div>
        </div>
        <div type="submit" className="col-lg-3 country center" onClick={() => {handleSubmit("Egypt")}}>
          <img className="countryImage" variant="top" src="./pictures/egypt.jpeg" alt="Egypt" />
          <div>
            <h3 className="whiteText">Egypt</h3>
          </div>
        </div>
        <div type="submit" className="col-lg-3 country center" onClick={() => {handleSubmit("France")}}>
          <img className="countryImage" variant="top" src="./pictures/france01.jpeg" alt="France" />
          <div>
            <h3 className="whiteText">France</h3>
          </div>
        </div>
        <div type="submit" className="col-lg-3 country center" onClick={() => {handleSubmit("India")}}>
          <img className="countryImage" variant="top" src="./pictures/india03.jpeg" alt="India" />
          <div>
            <h3 className="whiteText">India</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div type="submit" className="col-lg-3 country center" onClick={() => {handleSubmit("Italy")}}>
          <img className="countryImage" variant="top" src="./pictures/italy01.jpeg" alt="Italy" />
          <div>
            <h3 className="whiteText">Italy</h3>
          </div>
        </div>
        <div type="submit" className="col-lg-3 country center" onClick={() => {handleSubmit("Japan")}}>
          <img className="countryImage" variant="top" src="./pictures/japan01.jpeg" alt="Japan" />
          <div>
            <h3 className="whiteText">Japan</h3>
          </div>
        </div>
        <div type="submit" className="col-lg-3 country center" onClick={() => {handleSubmit("Mexico")}}>
          <img className="countryImage" variant="top" src="./pictures/mexico01.jpeg" alt="Mexico" />
          <div>
            <h3 className="whiteText">Mexico</h3>
          </div>
        </div>
        <div type="submit" className="col-lg-3 country center" onClick={() => {handleSubmit("Morocco")}}>
          <img className="countryImage" variant="top" src="./pictures/morocco01.jpeg" alt="Morocco" />
          <div>
            <h3 className="whiteText">Morocco</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div type="submit" className="col-lg-3 country center" onClick={() => {handleSubmit("Netherlands")}}>
          <img className="countryImage" variant="top" src="./pictures/netherlands01.jpeg" alt="Netherlands" />
          <div>
            <h3 className="whiteText">Netherlands</h3>
          </div>
        </div>
        <div type="submit" className="col-lg-3 country center" onClick={() => {handleSubmit("Spain")}}>
          <img className="countryImage" variant="top" src="./pictures/spain01.jpeg" alt="Spain" />
          <div>
            <h3 className="whiteText">Spain</h3>
          </div>
        </div>
        <div type="submit" className="col-lg-3 country center" onClick={() => {handleSubmit("Vietnam")}}>
          <img className="countryImage" variant="top" src="./pictures/vietnam01.jpeg" alt="Vietnam" />
          <div>
            <h3 className="whiteText">Vietnam</h3>
          </div>
        </div>
      </div>
      <div>
        <p className="white">
          {' '}
          <Link className="nav-link" to='/'>Log Out</Link>
        </p>
      </div>
    </div>
  )
}

export default Selection;
