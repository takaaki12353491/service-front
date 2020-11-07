import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import RestrictedRoute from './routes/RestrictedRoute'
import URL from './consts/URL'
import Default from './routes/Default'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'

function App() {
  return (
    <Router>
      <Switch>
        <RestrictedRoute exact path={URL.LOGIN} component={Login}/>
        <RestrictedRoute exact path={URL.SIGNUP} component={Signup}/>
        <Route path='/' component={Default}/>
      </Switch>
    </Router>
  )
}

export default App
