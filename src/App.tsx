import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import RestrictedRoute from './routes/RestrictedRoute'
import URL from './consts/URL'
import { Home, Login, Signup, NotFound } from './components/pages'
import Communities from './routes/Communities'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={URL.HOME} component={Home}/>
        <RestrictedRoute exact path={URL.LOGIN} component={Login}/>
        <RestrictedRoute exact path={URL.SIGNUP} component={Signup}/>
        <Route path={URL.COMMUNITIES.ROOT} component={Communities}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  )
}
export default App