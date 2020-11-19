import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Home from './Home';

function Pages() {
  return (
    <Router>
      <Navigation />
      <div id="roots" className="p-2">
        <Route path="/" exact component={Home} />
      </div>
    </Router>
  );
}

export default Pages;
