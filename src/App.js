import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './sass/App.scss';
import InputReferences from './components/InputReferences';

const App = () => {
  return (
    <div className="App">
      <InputReferences />      
    </div>
  );
}

export default App;


