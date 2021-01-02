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
  );
}

export default App;


