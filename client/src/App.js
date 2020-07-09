import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './scss/App.scss';

import Landing from './components/landing/landing-page.component';
import Sidebar from './components/sidebar/sidebar.component';
import About from './components/about/about.component';

function App() {
  return (
    <Router>
      <div className="container">
        <div className="app-container-grid">
          <Sidebar className="sidebar-container" />
          <div className="switch-container">
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
