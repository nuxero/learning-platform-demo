import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../components/Navigation';
import Inicio from './Inicio';
import PerfilP from './PerfilP';
import PerfilC from './PerfilC';
import Availability from './Availability';
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
        <Route path="/availability" exact component={Availability} />
        <Route path="/students" exact component={StudentPage} />
        <Route path="/homeworks" exact component={HomeworksPage} />
        <Route path="/homeworks/:uuid/upload" exact component={AddHomeworkFilePage} />
        <Route path="/homeworks/:uuid/list" exact component={ListHomeworkFilesPage} />
        <Route path="/PerfilP" exact component={PerfilP} />
        <Route path="/PerfilC" exact component={PerfilC} />
        <Route path="/" exact component={Inicio} />
      </div>
    </Router>
  );
}

export default Pages;
