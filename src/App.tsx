import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { LaunchList } from './pages/LaunchList';
import { LaunchDetail } from './pages/LaunchDetail';

function App() {
  return (
    <Router>
      <div className="App m-5">
        <Switch>
          <Route path="/" exact>
            <LaunchList />
          </Route>
          <Route path="/launch/:launchID" exact>
            <LaunchDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
