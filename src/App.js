import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import './sass/App.scss';
import InputReferences from './components/InputReferences.js';
import Navbar from "./components/Navbar.js";
import SeasonDisplay from "./components/SeasonDisplay";
import Episode from "./components/Episode";
import NewReferencesDisplay from "./components/NewReferencesDisplay"

const App = () => {
  return (
    <Auth0Provider
    domain="codedkhan.us.auth0.com"
    clientId="1fAqEsZEmLK7Lfrh0PP01H8YbIPCs1q0"
    redirectUri={window.location.origin}>
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <header>
          <div className="wrapper">
            <Route 
              path="/" 
              component={Navbar} 
              />
            {/* REVIEW title should reflect the purpose of our app (copyright!) */}
            {/* TODO coffee beside h1 */}
            <h1>Gilmore girls API</h1>
            <img src="./coffee.png" alt="Coffee Cup"/>
            <Route 
              path="/approve"
              component={NewReferencesDisplay}
            />
          </div>
        </header>
        <main>
          <Route 
            exact path="/season/:seasonNum" 
            component={SeasonDisplay} 
          />
          <Route
            exact path="/season/:seasonNum/episode/:episodeNum"
            component={Episode}
          />
          <Route path="/input" component={InputReferences} />
        </main>
      </div>
    </Router>
  </Auth0Provider>
  );
}

export default App;
