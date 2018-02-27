'use strict';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './screens/Dashboard';
import Article from './screens/Article';

const App = () => (
  <MuiThemeProvider>
    <Router>
      <div>
        <Route component={Dashboard} />
        <Route path={`${Article}/:articleId`} component={Article} />
      </div>
    </Router>
  </MuiThemeProvider>
);

export default App;