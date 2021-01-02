import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import './sass/App.scss';
import InputReferences from './components/InputReferences';

const App = () => {
  return (
    <Auth0Provider
    domain="codedkhan.us.auth0.com"
    clientId="1fAqEsZEmLK7Lfrh0PP01H8YbIPCs1q0"
    redirectUri={window.location.origin}>
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Route path="/" component={InputReferences} />
      </div>
    </Router>
  </Auth0Provider>
  );
}

export default App;


