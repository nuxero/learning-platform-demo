import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Home from './Home';
import VideoSession from './VideoSession';
import StudentPage from './StudentPage';
import HomeworksPage from './HomeworksPage';
import AddHomeworkFilePage from './AddHomeworkFilePage';
import ListHomeworkFilesPage from './ListHomeworkFilesPage';

function Pages() {
  return (
    <Router>
      <Navigation />
      <div id="roots" className="p-2">
        <Route path="/session/:uuid" exact component={VideoSession} />
        <Route path="/students" exact component={StudentPage} />
        <Route path="/homeworks" exact component={HomeworksPage} />
        <Route path="/homeworks/:uuid/upload" exact component={AddHomeworkFilePage} />
        <Route path="/homeworks/:uuid/list" exact component={ListHomeworkFilesPage} />
        <Route path="/" exact component={Home} />
      </div>
    </Router>
  );
}

export default Pages;
