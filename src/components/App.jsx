'use strict';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './Dashboard';

const App = () => (
  <MuiThemeProvider>
    <Router>
      <div>
        <Route component={Dashboard} />
      </div>
    </Router>
  </MuiThemeProvider>
);

export default App;