import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Inicio from './Home';

function Pages() {
  return (
    <Router>
      <Navigation />
      <div id="roots" className="p-2">
        <Route path="/" exact component={Inicio} />
      </div>
    </Router>
  );
}

export default Pages;
