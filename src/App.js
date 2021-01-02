import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './sass/App.scss';
import InputReferences from './components/InputReferences.js';
import Navbar from "./components/Navbar.js";
import axios from 'axios';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <header>
          <Route path="/" component={Navbar} />
        </header>
        <Route path="/input" component={InputReferences} />
      </div>
    </Router>
  );
}

export default App;


