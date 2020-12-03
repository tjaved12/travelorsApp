import React from "react";
// import CardDeck from "./components/CardDeck";
// import Wrapper from "./components/Wrapper"
import { Card } from "react-bootstrap"
import { CardDeck } from "react-bootstrap"
import {useHistory} from 'react-router-dom'

function Selection() {
  const history = useHistory()
  const  handleSubmit = (country) => {
    //event.preventDefault();
    console.log("It clicked!!")
    // API.postSignup(
    //   {email: formState.email,
    //      password: formState.password
    //   }
    // ).then(res => {
    //   console.log(res);
    console.log(country)
      history.push(`/${country}`)
      
    // })
  }

  return (
        <div className="Wrapper">
          <CardDeck>
            <Card type="submit" className="country" onClick={() => {handleSubmit("Argentina")}}>
              <Card.Img variant="top" src="./pictures/argentina01.jpeg" />
              <Card.Body>
                <Card.Title>Argentina</Card.Title>
                <Card.Text>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card type="submit" className="country" onClick={() => {handleSubmit("Australia")}}>
              <Card.Img variant="top" src="./pictures/australia03.jpeg" />
              <Card.Body>
                <Card.Title>Australia</Card.Title>
                <Card.Text>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card type="submit" className="country" onClick={() => {handleSubmit("Brazil")}}>
              <Card.Img variant="top" src="./pictures/brazil01.jpeg" />
              <Card.Body>
                <Card.Title>Brazil</Card.Title>
                <Card.Text>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
          <CardDeck>
            <Card type="submit" className="country" onClick={() => {handleSubmit("Canada")}}>
              <Card.Img variant="top" src="./pictures/canada.jpeg" />
              <Card.Body>
                <Card.Title>Canada</Card.Title>
                <Card.Text>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card type="submit" className="country" onClick={() => {handleSubmit("China")}}>
              <Card.Img variant="top" src="./pictures/china03.jpeg" />
              <Card.Body>
                <Card.Title>China</Card.Title>
                <Card.Text>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card type="submit" className="country" onClick={() => {handleSubmit("Egypt")}}>
              <Card.Img variant="top" src="./pictures/egypt.jpeg" />
              <Card.Body>
                <Card.Title>Egypt</Card.Title>
                <Card.Text>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
          <CardDeck>
            <Card type="submit" className="country" onClick={() => {handleSubmit("France")}}>
              <Card.Img variant="top" src="./pictures/france01.jpeg" />
              <Card.Body>
                <Card.Title>France</Card.Title>
                <Card.Text>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card type="submit" className="country" onClick={() => {handleSubmit("India")}}>
              <Card.Img variant="top" src="./pictures/india03.jpeg" />
              <Card.Body>
                <Card.Title>India</Card.Title>
                <Card.Text>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card type="submit" className="country" onClick={() => {handleSubmit("Italy")}}>
              <Card.Img variant="top" src="./pictures/italy01.jpeg" />
              <Card.Body>
                <Card.Title>Italy</Card.Title>
                <Card.Text>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
          <CardDeck>
            <Card type="submit" className="country" onClick={() => {handleSubmit("Japan")}}>
              <Card.Img variant="top" src="./pictures/japan01.jpeg" />
              <Card.Body>
                <Card.Title>Japan</Card.Title>
                <Card.Text>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card type="submit" className="country" onClick={() => {handleSubmit("Mexico")}}>
              <Card.Img variant="top" src="./pictures/mexico01.jpeg" />
              <Card.Body>
                <Card.Title>Mexico</Card.Title>
                <Card.Text>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card type="submit" className="country" onClick={() => {handleSubmit("Morocco")}}>
              <Card.Img variant="top" src="./pictures/morocco01.jpeg" />
              <Card.Body>
                <Card.Title>Morocco</Card.Title>
                <Card.Text>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
          <CardDeck>
           <Card type="submit" className="country" onClick={() => {handleSubmit("Netherlands")}}>
              <Card.Img variant="top" src="./pictures/netherlands01.jpeg" />
              <Card.Body>
                <Card.Title>Netherlands</Card.Title>
                <Card.Text>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card type="submit" className="country" onClick={() => {handleSubmit("Spain")}}>
              <Card.Img variant="top" src="./pictures/spain01.jpeg" />
              <Card.Body>
                <Card.Title>Spain</Card.Title>
                <Card.Text>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card type="submit" className="country" onClick={() => {handleSubmit("Vietnam")}}>
              <Card.Img variant="top" src="./pictures/vietnam01.jpeg" />
              <Card.Body>
                <Card.Title>Vietnam</Card.Title>
                <Card.Text>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
  )
}

export default Selection;
