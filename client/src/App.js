import React from "react";
import LoginInfo from "./pages/Login";
import Nav from "./components/Nav";
import * as API from "./utils/API";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SelectionContext from "./utils/SelectionContext.js";
import Selection from "./pages/Selection";
import Signup from "./pages/Signup";
import "./App.css";
import Country from "./pages/Country"
import Convertor from "./pages/Convertor";


function App() {


  return (
    <Router>
    <div className="container">
     
        <Nav />
        <Switch>
            <Route exact path="/" component={LoginInfo} />
            <Route exact path="/LoginInfo" component={LoginInfo} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/Selection" component={Selection} />
            <Route exact path="/Convertor" component={Convertor} />
            <Route exact path="/:CountryName" component={Country} />
           

          </Switch>
     
    </div>
    </Router>
  );
}

export default App;
