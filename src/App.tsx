import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Act from './pages/Act';
import Draw from './pages/Draw';
import Home from './pages/Home';
import Hunt from './pages/Hunt';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/act">
          <Act />
        </Route>
        <Route path="/draw">
          <Draw />
        </Route>
        <Route path="/hunt">
          <Hunt />
        </Route>
        <Route path="/">
          <Act />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
