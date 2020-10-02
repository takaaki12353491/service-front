import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/pages/home/Home'

function App() {
  return (
    <Router>
      <Switch>       
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
