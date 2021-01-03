import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, useParams } from "react-router-dom";
import './sass/App.scss';
import InputReferences from './components/InputReferences.js';
import Navbar from "./components/Navbar.js";
import SeasonDisplay from "./components/SeasonDisplay";
import Episode from "./components/Episode";

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
            {/* TODO coffee beside h1 */}
            <h1>Gilmore girls API</h1>
            <img src="./coffee.png" alt="Coffee Cup"/>
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
  );
}

export default App;


