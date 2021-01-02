import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, useParams } from "react-router-dom";
import './sass/App.scss';
import InputReferences from './components/InputReferences.js';
import Navbar from "./components/Navbar.js";
import SeasonDisplay from "./components/SeasonDisplay";
import Episode from "./components/Episode";
import axios from 'axios';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <header>
          <div className="wrapper">
            <Route 
              path="/" 
              component={Navbar} 
              />
            {/* REVIEW title should reflect the purpose of our app (copyright!) */}
            <h1>Gilmore girls API</h1>
          </div>
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
  );
}

export default App;


