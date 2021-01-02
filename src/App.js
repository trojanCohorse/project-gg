<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
=======
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, useParams } from "react-router-dom";
>>>>>>> 213d17e38fdf65d1d255a05eca54d6f3fe409d25
import './sass/App.scss';
import InputReferences from './components/InputReferences.js';
import Navbar from "./components/Navbar.js";
import SeasonDisplay from "./components/SeasonDisplay";
import Episode from "./components/Episode";

const App = () => {
  return (
    <Auth0Provider
    domain="codedkhan.us.auth0.com"
    clientId="1fAqEsZEmLK7Lfrh0PP01H8YbIPCs1q0"
    redirectUri={window.location.origin}>
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <h1>Gilmore girls</h1>
        <header>
          <Route 
            path="/" 
            component={Navbar} 
          />
        </header>
        <Route 
          exact path="/season/:seasonNum" 
          component={SeasonDisplay} 
        />
        <Route
          exact path="/season/:seasonNum/episode/:episodeNum"
          component={Episode}
        />
        <Route path="/input" component={InputReferences} />
      </div>
    </Router>
  </Auth0Provider>
  );
}

export default App;


