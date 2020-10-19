import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AuthProvider } from './modules/AuthContext'
import RestrictedRoute from './routes/RestrictedRoute'
import { URL } from './consts/URL'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'
import Profile from './components/pages/Profile'
import Communities from './routes/Communities'
import NewCommutnity from './components/pages/communities/NewCommunity'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <RestrictedRoute exact path={URL.LOGIN} component={Login}/>
          <RestrictedRoute exact path={URL.SIGNUP} component={Signup}/>
          <Route path={`${URL.COMMUNITIES}`} component={Communities}/>
        </Switch>
      </Router>
    </AuthProvider>
  )
}

export default App
