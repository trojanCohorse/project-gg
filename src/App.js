import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './sass/App.scss';
import InputReferences from './components/InputReferences.js';
import Navbar from "./components/Navbar.js";
import SeasonDisplay from "./components/SeasonDisplay";
import axios from 'axios';

const App = () => {
  // take the value from the selected link in the Navbar component and pass it to the SeasonDisplay component so the chosen season will render on the page
  const [season, setSeason] = useState([]);
  const showSeasons = (season) => {
    console.log('season returned maybe?', season);
    // return the season so it can be used in SeasonDisplay
    setSeason(season);
  }

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <header>
          <Route 
            path="/" 
            render={() => <Navbar showSeasons={showSeasons} />}
          />
        </header>
        <Route 
          exact path="/seasonOne" 
          render={() => <SeasonDisplay season={1} />} 
        />
        <Route 
          exact path="/seasonTwo" 
          render={() => <SeasonDisplay season={2} />} 
        />
        <Route path="/input" component={InputReferences} />
      </div>
    </Router>
  );
}

export default App;


