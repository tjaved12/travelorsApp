import React, { useContext } from "react";
import DeveloperContext from "../utils/DeveloperContext";

function Nav() {
  const { mood } = useContext(DeveloperContext);

  return ( 
    <div className="navbar navbar-light bg-light mb-5">
      { mood !== "lazy" ? (<span className="navbar-brand" role="img" aria-label="monocle face">🧐</span>) :
        (
          <span className="navbar-brand" role="img" aria-label="sleeping face"></span>
        )}
      <span className="navbar-brand mb-0 h1">Welcome to the Travelor's App!</span>
      <span className="navbar-brand mb-0 h1">You get to decide Where you want to visit amid Covid 19</span>
    </div>
  );
}

export default Nav;