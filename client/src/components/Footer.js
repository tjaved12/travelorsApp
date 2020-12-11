import React from 'react'
import { Button } from "react-bootstrap"

export default function Footer() {


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
    return (
      <div className='container'>
        <div className="row">
          <div className="col-lg-12"> 
            <div className= "footer whiteText center" role="contentinfo">

              <p>
              Rutgers BootCamp Group Project #3<br></br>
              Jennifer Aguirre, Kyle Brazier, Tahmeena Javed, Matt Rikard<br></br>
              Copyright 2020<br></br>
              </p>
              
            </div>
          </div>
        </div>
        <Button variant="info" onClick={topFunction} className="myBtn" id="myBtn" title="Go to top">^</Button>
      </div>
    )}