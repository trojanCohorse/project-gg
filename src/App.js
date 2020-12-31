import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './sass/App.scss';
import InputReferences from './components/InputReferences';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Route path="/" component={InputReferences} />
      </div>
    </Router>
  );
}

export default App;


