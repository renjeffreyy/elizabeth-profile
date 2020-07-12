import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './scss/App.scss';

import Landing from './components/landing/landing-page.component';
import Sidebar from './components/sidebar/sidebar.component';
import About from './components/about/about.component';
import Contact from './components/contact/contact.component';
import NavComponent from './components/nav/nav.component';
import Login from './components/login/login.component';
import PrivateRoute from './components/private-route/private-route.component';
import Dashboard from './components/dashboard/dashboard.component';

import SetAuthToken from './utils/set-auth-token.util';

function App() {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    SetAuthToken(localStorage.token);
  });
  return (
    <Router>
      <div className="container">
        <NavComponent />
        <div className="app-container-grid">
          <Sidebar className="sidebar-container" />
          <div className="switch-container">
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute
                auth={auth}
                exact
                path="/dashboard"
                component={Dashboard}
              />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
