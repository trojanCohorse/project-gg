import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import "./sass/App.scss";
import InputReferences from "./components/InputReferences.js";
import Navbar from "./components/Navbar.js";
import SeasonDisplay from "./components/SeasonDisplay";
import NewReferencesDisplay from "./components/NewReferencesDisplay";
import Instructions from "./components/Instructions.js"

const App = () => {
  return (
    <Auth0Provider
      domain="codedkhan.us.auth0.com"
      clientId="1fAqEsZEmLK7Lfrh0PP01H8YbIPCs1q0"
      redirectUri={window.location.origin}
    >
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <header>
              <Route path="/" component={Navbar} />
              {/* REVIEW title should reflect the purpose of our app (copyright!) */}
            <div className="wrapper">
              <h1>Gilmore girls API</h1>
              <img src="../coffee.png" alt="Coffee Cup" />
            </div>
          </header>
          <main>
            <Route exact path="/" component={Instructions}  />
            <Route path="/season/:seasonNum" component={SeasonDisplay} />
            <Route path="/input" component={InputReferences} />
            <Route path="/approve" component={NewReferencesDisplay} />
          </main>
          <footer>Created by Asif, Boris, Caitlin, and Greg</footer>
        </div>
      </Router>
    </Auth0Provider>
  );
};

export default App;
