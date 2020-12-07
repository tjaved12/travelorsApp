import React from "react";
import { Card } from "react-bootstrap"
import { CardDeck } from "react-bootstrap"
import {useHistory} from 'react-router-dom'
import classes from './BackgroundVideo.module.css';
import "./Selection.css"

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
    <div className={classes.Container}>
      <img src="https://lh3.googleusercontent.com/2NWt-FYrIy56hxHyJ8Ga7xP5KA1uTKL-C-zE6ebp_a-V0hEieIcO5Tpfp9nWCjlhKSjH6RJ_cA2HpiG231aIyxQ-7B9EI-NwywCEJHlJI0F1VjE9ISUInE6V-N6-YKAMLeMoG29rgvdz__9b3VPndN7y5EeLK0jNTEpQ_ttUSqYnybz1_YbEWMl7Z-GDly00uIWf64DOVgU3wMNhjSRO6XozcddE4jHJ6-6cpg1SWUmYH-P5H94BKS5R_OTklnP3U1Nxj-TFuFL8QRcUW7GFXQSGNnD_dzl58gH7nIJzDWJlWFTy2XP4Nu2kyVfqDiRbHsQy-pvOmUrEMMvzxz-4HUeqQyQUzQSysOFSPIBb9z41EIeTfAkQPsBfmsB9IdKBd55moujXao5NGGGA0Jdq1B5JmhJUGfeKydbZuZbSlOH1IwrAeaBwoyG_nW0wpQ_hS2KJX5tfnwuLrQ2yaewuurdv7jYrzMCay1Dc9qmev79IcC7bvRSWEHhAZeq0-3FDxflJngGVfuhEAiOYtv8qGyr3uiSOy-qT6JWMdCrhlGGMryFPqYkH_-It9GIzohy49WEnoL8EvJM0cBgou2dW7JFb1P9ZHKUd4Rw9b-JnahbgOwLc0jDQ4ZjhGZawSzxLD9BGNqFT2-pb0shkod-oIvgJBY07u7d0-skmk94BCFKLlhaP14pbbsq9VDl2sWU=w956-h717-no?authuser=0" alt="travel" />
      <div className={classes.Content}>
        <div className={classes.SubContent}>
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
      </div>
    </div>
  )
}

export default Selection;
